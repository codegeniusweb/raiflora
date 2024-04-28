const sgMail=require('@sendgrid/mail')
const {SENDGRID_API_KEY,SENDGRID_API_USER}=process.env
sgMail.setApiKey(SENDGRID_API_KEY)



const sendEmail=async(data)=>{
    const email={...data,from:SENDGRID_API_USER}
    await sgMail.send(email)
    return true
}
module.exports=sendEmail