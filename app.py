import sqlite3
# pyrefly: ignore [missing-import]
from flask import Flask,render_template,jsonify,request,redirect,url_for


app = Flask(__name__)
app.secret_key="super_secret_key"

def get_db_connection():
    conn = sqlite3.connect("users.db")
    conn.row_factory = sqlite3.Row
    # return row as dictionary 
    return conn
 
# create database tables
def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    # create users table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL,
        dob TEXT NOT NULL,
        gender TEXT NOT NULL,
        course TEXT NOT NULL
    )
    """)
    conn.commit()
    conn.close()
init_db()

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/contact')
def contact():
    return render_template("contact.html")

@app.route('/courses')
def courses():
    return render_template("courses.html")

@app.route('/trainers')
def trainers():
    return render_template("trainers.html")

@app.route('/register',methods=["POST","GET"])
def register():
    return render_template("register.html")

@app.route('/login', methods=["POST", "GET"])
def login():
    return render_template("login.html")

@app.route('/api/register', methods=["POST"])
def api_register():
    data = request.get_json()
    email = data.get("email")
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE email = ?", (email,))
    user = cursor.fetchone()
    if user:
        return jsonify({"status": "error", "message": "User already exists with this email!"}), 400
    
    cursor.execute("INSERT INTO users (name, email, password, dob, gender, course) VALUES (?, ?, ?, ?, ?, ?)", (data["name"], data["email"], data["password"], data["dob"], data["gender"], data["course"]))
    conn.commit()
    conn.close()
    return jsonify({"status": "success", "message": "Registration successful!"})

@app.route('/api/login', methods=["POST"])
def api_login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE email = ?", (email,))
    user = cursor.fetchone()
    conn.close()
    if user and user["password"] == password:
        return jsonify({"status": "success", "message": "Login successful! Welcome back."})
    else:
        return jsonify({"status": "error", "message": "Invalid email or password!"}), 401

if __name__ == '__main__':
    app.run(debug=True)