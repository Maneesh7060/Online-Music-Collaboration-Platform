<!DOCTYPE html>
<html>
<head>
    <title>Collaborate</title>
    <link rel="stylesheet" href="assets/style.css">

    <!-- Firebase CDN -->
    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js"></script>

    <style>
        #chatbox {
            width: 60%;
            height: 300px;
            background: #fff;
            padding: 10px;
            border: 1px solid #ccc;
            overflow-y: scroll;
            margin-bottom: 15px;
        }
        #message {
            width: 300px;
            padding: 8px;
        }
        button {
            padding: 8px 15px;
        }
    </style>
</head>

<body>

<h2>Real-Time Music Collaboration Room</h2>
<p>Chat live with collaborators and coordinate your music edits.</p>

<!-- Chatbox UI -->
<div id="chatbox"></div>

<input type="text" id="message" placeholder="Type a message..." />
<button onclick="sendMessage()">Send</button>

<script>
    // TODO: Replace with your actual Firebase config (temporary demo config below)
    var firebaseConfig = {
        apiKey: "AIzaSyDemo-FILL-YOUR-OWN",
        authDomain: "yourapp.firebaseapp.com",
        databaseURL: "https://yourapp-default-rtdb.firebaseio.com",
        projectId: "yourapp",
        storageBucket: "yourapp.appspot.com",
        messagingSenderId: "123456789",
        appId: "1:123456789:web:abcdef"
    };

    firebase.initializeApp(firebaseConfig);

    var db = firebase.database().ref("collabChat/");

    function sendMessage() {
        let msg = document.getElementById("message").value;

        if (msg.trim() === "") return;

        db.push().set({
            message: msg,
            time: new Date().toLocaleTimeString()
        });

        document.getElementById("message").value = "";
    }

    // Auto-load messages in real-time
    db.on("child_added", function(snapshot) {
        let data = snapshot.val();
        document.getElementById("chatbox").innerHTML +=
            "<p><b>🎧 User:</b> " + data.message + 
            " <span style='font-size:10px; color:gray;'>(" + data.time + ")</span></p>";

        document.getElementById("chatbox").scrollTop =
            document.getElementById("chatbox").scrollHeight;
    });
</script>

</body>
</html>
