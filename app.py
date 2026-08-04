from flask import Flask,render_template,jsonity,request
app=Flask(__name__)
@app.route('/')
def home():
    return render_template("index.html")
@app.route("/about")
def about():
    return render_template("about.html")
@app.route("/contact")
def contact():
     return render_template("contact.html")
@app.route("/courses")
def courses():
    return render_template("courses.html")
@app.route("/index")
def index():
     return render_template("index.html")
@app.route("/login")
def login():
    return render_template("login.html") 
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
@app.route("/trainers")
def trainers():
     return render_template("trainers.html") 
if __name__ == '__main__':
    app.run(debug=True)