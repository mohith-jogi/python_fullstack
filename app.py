
from flask import Flask,render_template,jsonify,request

app = Flask(__name__)


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
    if request.method=="POST":
        name=request.form["name"]
        email=request.form["email"]
        password=request.form["password"]
        dob=request.form["dob"]
        gender=request.form["gender"]
        course=request.form["course"]
        return render_template("register.html")
    return render_template("register.html")
@app.route('/login',methods=["POST","GET"])
def login():
    if request.method=="POST":
        name=request.form["name"]
        email=request.form["email"]
        password=request.form["password"]
        dob=request.form["dob"]
        gender=request.form["gender"]
        course=request.form["course"]
        return render_template("login.html")
    return render_template("login.html")
@app.route('/api/register', methods=["POST"])
def api_register():
    data = request.get_json()
    email = data.get("email")

    if email in users db:
        return jsonify({"status": "error","User already exists with this email!"}), 400
    #
    users_db[email]=data
    return jsonify({"status":})
@app.route('/api/login', methods=["POST"])
def api_login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user=users_db.get(email)
    if user and user.get("password") == password:
        return jsonify({"status": "success", "message": "Login successfull welcome back."})
    else:
         return jsonify({"status":"})
if __name__ == '__main__':
    app.run(debug=True)