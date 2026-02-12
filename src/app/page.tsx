export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sanjeev NC - Award-Winning ITSM Professional</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .header {
            text-align: center;
            background: rgba(255, 255, 255, 0.95);
            padding: 60px 40px;
            border-radius: 20px;
            margin-bottom: 40px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        .header h1 {
            font-size: 3.5em;
            color: #2c3e50;
            margin-bottom: 10px;
            font-weight: 700;
        }
        
        .header h2 {
            font-size: 1.8em;
            color: #7f8c8d;
            margin-bottom: 20px;
            font-weight: 300;
        }
        
        .award-badge {
            display: inline-block;
            background: linear-gradient(45deg, #f39c12, #e67e22);
            color: white;
            padding: 15px 30px;
            border-radius: 50px;
            font-size: 1.2em;
            font-weight: bold;
            margin: 20px 0;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }
        
        .card {
            background: rgba(255, 255, 255, 0.95);
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
            transition: transform 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-10px);
        }
        
        .card h3 {
            color: #2c3e50;
            font-size: 1.8em;
            margin-bottom: 20px;
            border-bottom: 3px solid #3498db;
            padding-bottom: 10px;
        }
        
        .card p {
            font-size: 1.1em;
            color: #555;
            line-height: 1.8;
        }
        
        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin-top: 20px;
        }
        
        .skill-tag {
            background: #3498db;
            color: white;
            padding: 8px 16px;
            border-radius: 25px;
            font-size: 0.9em;
            font-weight: 500;
        }
        
        .contact {
            text-align: center;
            background: rgba(255, 255, 255, 0.95);
            padding: 40px;
            border-radius: 15px;
            margin-top: 40px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        
        .contact h3 {
            color: #2c3e50;
            font-size: 2em;
            margin-bottom: 20px;
        }
        
        @media (max-width: 768px) {
            .header h1 {
                font-size: 2.5em;
            }
            
            .header h2 {
                font-size: 1.4em;
            }
            
            .content {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Sanjeev NC</h1>
            <h2>ITSM Professional</h2>
            <div class="award-badge">🏆 Award Winner</div>
        </div>
        
        <div class="content">
            <div class="card">
                <h3>Professional Excellence</h3>
                <p>Recognized as an award-winning IT Service Management professional with expertise in delivering exceptional service solutions and driving organizational efficiency through strategic ITSM implementations.</p>
            </div>
            
            <div class="card">
                <h3>Core Expertise</h3>
                <div class="skills">
                    <span class="skill-tag">ITIL Framework</span>
                    <span class="skill-tag">Service Management</span>
                    <span class="skill-tag">Process Improvement</span>
                    <span class="skill-tag">Incident Management</span>
                    <span class="skill-tag">Change Management</span>
                    <span class="skill-tag">Problem Management</span>
                </div>
            </div>
            
            <div class="card">
                <h3>Achievements</h3>
                <p>Distinguished career in ITSM with recognition for outstanding contributions to service delivery, process optimization, and team leadership. Committed to excellence and continuous improvement in IT service management practices.</p>
            </div>
        </div>
        
        <div class="contact">
            <h3>Let's Connect</h3>
            <p>Ready to discuss ITSM solutions and share expertise in driving service excellence.</p>
        </div>
    </div>
</body>
</html>` }} />
  );
}