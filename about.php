<?php
    include "header.php";
?>

<body>
    <div id = "content" >
        <div id = "top">
            <h1 class="header">About Me </h1>
            <img id = "profilePicture" src="Images/profile.jpg">
            <br> a
        </div>
        <div id= "aboutMeHolder">
            <br>
            <h1 class="header2"> Jon Menard</h1>
            <h2 class="header2">4th Year Software Engineering Student - Carleton University</h2>
            <div id = "aboutMe" >
                I am a student, currently in my fourth-year studies of Software Engineering at Carleton University. I was first introduced to software development five years ago when 
                I took an "Intro to Coding" class in grade 11. From the moment I wrote my first line, "Hello world!" and saw it appear on the screen, I fell in love. I have 
                since had experience writing in: 
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>PHP</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>C</li>
                    <li>Lisp</li>
                    <li>Python</li>
                    <li>MySQL</li>
                    <li>UNIX command line</li>
            
                </ul>
                I have also gained experience working in groups using Github to host our projects. 
                At the moment I am working on my 4th-year enginerring project. 3 other people and myself are working along side a Carleton PHD canidate and Carleton Profesor to create a database the will store information from models that run simulations which map the spread of COVID-19.
                I have also built my own computer and I am particularly strong in Java and Javascript. 
                <br><br>
                My passion for Software Engineering is fueled by trying to solve complex problems that seem impossible. I thoroughly enjoy coding the logic behind the function of the program. I have created this portfolio all on my own, coding everything from scratch in my free time. 
                Shown in the projects section are four short projects; MineSweeper and Snakes, Flappy Bird and my first attempt at artificial intelligence using the genetic algorithm, which I have created to help illustrate my excitement for Software Engineering.
                <br>
                <br>
                I am currenlty working in a database development team for the Goverment at Statistics Canada.
                Outside of school I am a pretty big gym rat and love getting my hands dirty as well as spending time outdoors.
                <br>
                <br>

                Last updated October 23, 2020
            </div>
        </div>
    </div>
</body>


<script>
    $(function(){
        $("#about").css({
            color: 'black',
            textDecoration: 'underline'
        });
    });
</script>

</html>