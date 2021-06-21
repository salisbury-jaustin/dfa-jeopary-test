Vue.prototype.$game_data = {
    categories: [
        {
            category: "Social Media",
            questions: [
                {
                    points: 200,
                    question: "3.8 billion people use social media",
                    answers : {
                        a: "True", 
                        b: "False"
                        },
                    correct: "a"
                },
                {
                    points: 400,
                    question: "Digital consumers spend nearly _____ hours on social media every day",
                    answers : {
                        a: "less than 1", 
                        b: "2.5",
                        c: "3 or more" 
                        },
                    correct: "b"
                },
                { 
                    points: 600,
                    question: "You should share your personal information with strangers",
                    answers: {
                        a: "True", 
                        b: "False"
                        },
                    correct: "b"
                },
                {
                    points: 800,
                    question: "Always ______ before you post",
                    answers : {
                        a: "Pause", 
                        b: "Eat",
                        c: "Jog" 
                        },
                    correct: "a"
                },
                {
                    points: 1000,
                    question: "You should always ______ suspicious activity",
                    answers: {
                        a: "Point out", 
                        b: "Confront",
                        c: "Report" 
                        },
                    correct: "c"
                }
            ]
        }, 
        {
            category: "Identity Theft",
            questions: [
                {
                    points: 200,
                    question: "7-10% of the U.S. population are victim to identity fraud each year",
                    answers : {
                        a: "True", 
                        b: "False"
                        },
                    correct: "a"
                },
                {
                    points: 400,
                    question: "The average cost of a data breach for a U.S. company is ______",
                    answers : {
                        a: "$170,000", 
                        b: "$1.13 million",
                        c: "$8.19 million" 
                    },
                    correct: "c"
                },
                {
                    points: 600,
                    question: "To stay protected it is best to keep your software out-of-date",
                    answers : {
                        a: "True", 
                        b: "False"
                        },
                    correct: "b"
                },
                {
                    points: 800,
                    question: "It is safe to use free wifi with no encryption",
                    answers: {
                        a: "True", 
                        b: "False"
                        },
                    correct: "b"
                },
                {
                    points: 1000,
                    question: "To insure your online accounts are safe you should _______",
                    answers: {
                        a: "Store your passwords on your computer", 
                        b: "Use HTTP",
                        c: "Use multi-factor authentication" 
                        },
                    correct: "c"
                }
            ]
        },
        {
            category: "Passwords",
            questions: [
                {
                    points: 200,
                    question: "You should consider using the shortest password possible",
                    answers : {
                        a: "True", 
                        b: "False"
                        },
                    correct: "b"
                },
                {
                    points: 400,
                    question: "It is safe to give your co-worker your password via email",
                    answers : {
                        a: "True", 
                        b: "False"
                        },
                    correct: "b"
                },
                {
                    points: 600,
                    question: "You should have _____ passwords for your various online accounts",
                    answers : {
                        a: "Many", 
                        b: "2",
                        c: "4" 
                        },
                    correct: "a"
                },
                {
                    points: 800,
                    question: "Using a password manager is the most secure way to store passwords",
                    answers : {
                        a: "True", 
                        b: "False"
                        },
                    correct: "a"
                },
                {
                    points: 1000,
                    question: "Multi-factor authentication ensures that _______",
                    answers : {
                        a: "Anyone can get your password", 
                        b: "Only close friends and family can access your password",
                        c: "Only you can access your password" 
                        },
                    correct: "c"
                }
            ]
        },
        {
            category: "Phishing",
            questions: [
                {
                    points: 200,
                    question: "Attackers may email or text when phishing for sensitive information",
                    answers : {
                        a: "True", 
                        b: "False"
                        },
                    correct: "a"
                },
                {
                    points: 400,
                    question: "If you are concerned about the legitimacy of an email _______",
                    answers : {
                            a: "Test the link in the email", 
                            b: "Call the company directly",
                            c: "Open the attachment to find out more" 
                                },
                    correct: "b"
                },
                {
                    points: 600,
                    question: "Email from people you know is always safe",
                    answers : {
                        a: "True", 
                        b: "False"
                        },
                    correct: "b"
                },
                {
                    points: 800,
                    question: "Always ______ before you act",
                    answers: {
                        a: "Turn on anti-virus", 
                        b: "Enable incognito mode in the browser",
                        c: "Think" 
                        },
                    correct: "c"
                },
                {
                    points: 1000,
                    question: "HTTPS indicates encryption is enabled",
                    answers: {
                        a: "True", 
                        b: "False"
                        },
                    correct: "a"
                }
            ]
        },
        {
            category: "E-skimming",
            questions: [
                {
                    points: 200,
                    question: "E-skimming is ______",
                    answers : {
                        a: "Surfing the web", 
                        b: "Buying skim milk online",
                        c: "Using skimming code on payment processing pages to capture information" 
                        },
                    correct: "c"
                },
                {
                    points: 400,
                    question: "Malicious code captures credit card data in real time",
                    answers : {
                        a: "True", 
                        b: "False"
                        },
                    correct: "a"
                },
                {
                    points: 600,
                    question: "To minimize risks ________",
                    answers : {
                        a: "Perform regular updates to payments software", 
                        b: "Use out-dated anti-virus software",
                        c: "Hold off on code integrity checks until attacks happen" 
                        },
                    correct: "a"
                },
                {
                    points: 800,
                    question: "JavaScript code is left unedited by cross-site scripting attacks",
                    answers: {
                        a: "True", 
                        b: "False"
                        },
                    correct: "b"
                },
                {
                    points: 1000,
                    question: "If you are a victim of e-skimming _______",
                    answers : {
                        a: "Keep your passwords the same", 
                        b: "Continue shopping",
                        c: "Save of copy of skimming scripts or loader domains to report to law enforcement" 
                        },
                    correct: "c"
                }
            ]
        },
        {
            category: "At Work",
            questions: [
                {
                    points: 200,
                    question: "From the top leadership to the newest employee, cybersecurity requires vigilance from everyone",
                    answers: {
                        a: "True", 
                        b: "False"
                        },
                    correct: "a"
                },
                {
                    points: 400,
                    question: "You should treat business information with less care than your personal information",
                    answers : {
                        a: "True", 
                        b: "False"
                        },
                    correct: "b"
                },
                {
                    points: 600,
                    question: "Smart technology works even when employees use it incorrectly",
                    answers : {
                        a: "True", 
                        b: "False"
                        },
                    correct: "b"
                },
                {
                    points: 800,
                    question: "Cybercriminal cannot gather any valuable information from social media posts by the company",
                    answers : {
                        a: "True", 
                        b: "False"
                        },
                    correct: "b"
                },
                {
                    points: 1000,
                    question: "To avoid data breaches you should ______",
                    answers : {
                        a: "Click on unkown links", 
                        b: "Post vendor information on social media",
                        c: "Delete suspicious messages immediately"
                        },
                    correct: "c"
                }
            ]
        }
        
    ]
}
