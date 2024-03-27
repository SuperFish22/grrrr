from flask import Flask,request
from flask import render_template
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

 
#smtp_server = smtplib.SMTP("smtp.gmail.com", 587)
#smtp_server.starttls()
#smtp_server.login("your_email@gmail.com", "your_password")

def email(name,email,phone):
    msg = MIMEMultipart()
    msg["From"] = "your_email@gmail.com"
    msg["To"] = "recipient_email@example.com"
    text = "Привет! C тобой хочет связаться {name} вот его почта: {email} и его номер телефона: {phone}"
    msg.attach(MIMEText(text, "plain"))
    smtp_server.sendmail("your_email@gmail.com", "recipient_email@example.com", msg.as_string())
    smtp_server.quit()
    


app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        name = request.form.get('name')
        phone = request.form.get('email')
        email = request.form.get('phone')
        #email(name,email,phone)
        return "Ok"
    return render_template('index.html')

if __name__ == '__main__':
  
  app.run(debug=True) 