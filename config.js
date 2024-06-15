const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348078074747";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_19_06_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQyLFxuICAgICAgICA1NixcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI4LFxuICAgICAgICA2MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODMsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE5LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwLFxuICAgICAgICA3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM2LFxuICAgICAgICA2MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDg3LFxuICAgICAgICA4NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NixcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTcsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1LFxuICAgICAgICAyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDU2LFxuICAgICAgICA3NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMSxcbiAgICAgICAgODcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUko3VDJKWm9JOFZnazFXOUN2VmZubVlmemp4MndyRFFsOFBoZi9PS0NIcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMU1zWnNlVUdRUjZDcF9VenJDSDdPUVwiLFxuICBcInBob25lSWRcIjogXCIxMWM1NTdmMS1kM2VjLTQ3MzEtOWVhMC00OGFiYjg0NDc4Y2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM0LFxuICAgICAgMTA1LFxuICAgICAgMzEsXG4gICAgICAxMDMsXG4gICAgICAxMzcsXG4gICAgICAyMDEsXG4gICAgICAxMzcsXG4gICAgICAxNjUsXG4gICAgICA1OSxcbiAgICAgIDExOSxcbiAgICAgIDIyNixcbiAgICAgIDIzNSxcbiAgICAgIDE0OSxcbiAgICAgIDk3LFxuICAgICAgNDIsXG4gICAgICAyMzQsXG4gICAgICAzNyxcbiAgICAgIDMxLFxuICAgICAgMTU2LFxuICAgICAgMTQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQyLFxuICAgICAgNTgsXG4gICAgICAyMjEsXG4gICAgICA1LFxuICAgICAgMTE3LFxuICAgICAgNTEsXG4gICAgICAxOTMsXG4gICAgICAyMjEsXG4gICAgICAxNDYsXG4gICAgICAxMzksXG4gICAgICA0NSxcbiAgICAgIDE1MyxcbiAgICAgIDQ2LFxuICAgICAgMjUsXG4gICAgICA3OCxcbiAgICAgIDU2LFxuICAgICAgNzksXG4gICAgICAxMTUsXG4gICAgICAyNTQsXG4gICAgICAyMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWFdWVktYMVZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNzgwNzQ3NDc6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCC8J2aqvCdmqvwnZqw8J2Qhu+jv1wiLFxuICAgIFwibGlkXCI6IFwiMjM5OTcyODQxOTU1NDU5OjI3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xUc24zd1FwdTYzc3dZWUF5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaG54bndsZFpNN1FnZHRtdlpPR0Nzcjg1QlVRSGdWQXB1OWVac1hvZzBUWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiOGs4bGhUUmUxN2tnY3h6S1B3cU1mYmVzY00wQXA2RlpHbWlycjBjUTlaQzZKb2JldWlNaXlKeVliZVFUVEhCNytBRnhvOVdlTWRFVlRjN2NOS1Fndz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxcHhzRHFCZHBxOTY0aW5VODZ0NGlzUmYzcDBQL2hTN2F3ZHdBakhyT3RtQkQ4ZXFidzZIbEVQcnB0RStTdlhsbWhHd2RiYkpQSkdXS081U2tQWUVoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDc4MDc0NzQ3OjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODQ4MjczMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU0vSVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTS9JLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
