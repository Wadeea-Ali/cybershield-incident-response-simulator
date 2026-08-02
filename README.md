# cybershield-incident-response-simulator
A web-based cybersecurity simulation game where players respond to real-world security incidents and protect the company from cyber threats.
START 
Create three difficulty levels: 
Easy 
Medium 
Hard 
Create 20 cybersecurity incidents for each difficulty level. 
Each incident contains: 
Incident description 
Four answer choices 
Correct answer 
Create variables: 
Score 
Current incident 
Selected difficulty 
Timer 
Incident number 
Display the Start Screen. 
Display three difficulty options: 
Easy 
Medium 
Hard 
Wait for the player to select a difficulty. 
When the player selects a difficulty: 
Save the selected difficulty. 
Load the 20 incidents for that difficulty. 
Shuffle the incidents into a random order. 
Set the score to 0. 
Set the incident number to 1. 
Display the first incident. 
FOR EACH INCIDENT: 
Display: 
Incident description 
Four answer choices 
Current score 
"Security Incident [current number] of 20" 
    Set the timer based on the selected difficulty: 
 
        If Easy: 
            Set timer to 20 seconds. 
 
        If Medium: 
            Set timer to 15 seconds. 
 
        If Hard: 
            Set timer to 10 seconds. 
 
    Start the timer. 
 
    Wait for the player to choose an answer. 
 
    IF the player selects an answer before the timer reaches zero: 
 
        Stop the timer. 
 
        IF the selected answer is correct: 
 
            Increase the score by 1. 
 
 
 
 
            Display: 
                "Incident Resolved" 
 
            Play the correct-answer sound. 
 
        ELSE: 
 
            Display: 
                "Security Breach" 
 
            Play the incorrect-answer sound. 
 
    ELSE IF the timer reaches zero: 
 
        Display: 
            "Time's Up! Threat Escalated" 
 
        Play the incorrect-answer sound. 
 
    Disable the answer choices. 
 
    Display the Next Incident button. 
 
    When the player clicks the Next Incident button: 
 
        Increase the incident number by 1. 
 
        IF there are incidents remaining: 
 
            Reset the timer. 
 
            Display the next incident. 
 
        ELSE: 
 
            End the game. 
 
END GAME: 
 
    Stop the timer. 
 
    Display: 
        Final score out of 20. 
 
    IF the score is 14 or higher: 
 
        Display: 
            "Mission Successful!" 
            "Company Secured" 
 
    ELSE: 
 
Display: 
"Mission Failed!" 
"Company Compromised" 
Display the Restart button. 
When the player clicks the Restart button: 
Reset the score. 
Reset the incident number. 
Reset the timer. 
Return to the difficulty selection screen. 
END
