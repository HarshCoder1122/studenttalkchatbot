import { colleges } from './colleges';

// Note: This file now serves as fallback responses when AI services are unavailable

export const getResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();

  // Greeting responses
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return "Hello! Welcome to the J&K College Selection Assistant. I'm here to help you find the perfect college for your academic journey. You can ask me about colleges in J&K, admission requirements, course details, or anything related to college selection. How can I assist you today?";
  }

  // Engineering colleges
  if (lowerMessage.includes('engineering') || lowerMessage.includes('btech') || lowerMessage.includes('computer science')) {
    const engineeringColleges = colleges.filter(c => 
      c.type === 'Engineering' || c.courses.some(course => 
        course.toLowerCase().includes('computer') || 
        course.toLowerCase().includes('engineering') ||
        course.toLowerCase().includes('electronics') ||
        course.toLowerCase().includes('mechanical')
      )
    );
    
    let response = "Here are the top engineering colleges in J&K:\n\n";
    engineeringColleges.forEach(college => {
      response += `🎓 **${college.name}**\n`;
      response += `📍 Location: ${college.location}\n`;
      response += `📚 Courses: ${college.courses.join(', ')}\n`;
      response += `📋 Eligibility: ${college.eligibility}\n\n`;
    });
    
    response += "For engineering admissions, focus on JEE Main preparation and maintain good 12th grades. Would you like specific information about any of these colleges?";
    return response;
  }

  // Medical colleges
  if (lowerMessage.includes('medical') || lowerMessage.includes('mbbs') || lowerMessage.includes('doctor') || lowerMessage.includes('medicine')) {
    const medicalColleges = colleges.filter(c => c.type === 'Medical');
    
    let response = "Here are the medical colleges in J&K:\n\n";
    medicalColleges.forEach(college => {
      response += `🏥 **${college.name}**\n`;
      response += `📍 Location: ${college.location}\n`;
      response += `📚 Courses: ${college.courses.join(', ')}\n`;
      response += `📋 Eligibility: ${college.eligibility}\n\n`;
    });
    
    response += "NEET qualification is mandatory for all medical admissions. Start preparing early and focus on Biology, Physics, and Chemistry. Need help with NEET preparation strategies?";
    return response;
  }

  // Arts/Humanities
  if (lowerMessage.includes('arts') || lowerMessage.includes('humanities') || lowerMessage.includes('literature') || lowerMessage.includes('history')) {
    const artsColleges = colleges.filter(c => c.courses.includes('Arts'));
    
    let response = "Great choice! Here are universities offering Arts programs in J&K:\n\n";
    artsColleges.forEach(college => {
      response += `📚 **${college.name}**\n`;
      response += `📍 Location: ${college.location}\n`;
      response += `📋 Eligibility: ${college.eligibility}\n\n`;
    });
    
    response += "Arts subjects offer diverse career opportunities in teaching, civil services, journalism, and more. Would you like to know about specific arts streams or career prospects?";
    return response;
  }

  // Commerce
  if (lowerMessage.includes('commerce') || lowerMessage.includes('bcom') || lowerMessage.includes('business') || lowerMessage.includes('accounting')) {
    const commerceColleges = colleges.filter(c => c.courses.includes('Commerce'));
    
    let response = "Here are the options for Commerce studies in J&K:\n\n";
    commerceColleges.forEach(college => {
      response += `💼 **${college.name}**\n`;
      response += `📍 Location: ${college.location}\n`;
      response += `📋 Eligibility: ${college.eligibility}\n\n`;
    });
    
    response += "Commerce opens doors to careers in finance, banking, CA, CS, and business management. Want to know about specific commerce specializations?";
    return response;
  }

  // Outside J&K options
  if (lowerMessage.includes('outside') || lowerMessage.includes('delhi') || lowerMessage.includes('other states') || lowerMessage.includes('national')) {
    return `Many J&K students successfully pursue education outside the state. Here are some considerations:

🌟 **Popular Destinations:**
- Delhi: Delhi University, JNU, Jamia Millia Islamia
- Mumbai: Mumbai University, IIT Bombay
- Bangalore: IISc, Christ University
- Pune: University of Pune, Symbiosis
- Chandigarh: Panjab University, PEC

💡 **Important Factors:**
- Distance from home and travel costs
- Cost of living and accommodation
- Cultural adaptation and support systems
- Academic reputation and placement records
- Availability of scholarships for J&K students

📋 **Application Tips:**
- Apply through CUET for central universities
- Check state quota provisions for J&K students
- Look for special scholarships for J&K students
- Consider both government and private institutions

Would you like specific information about any particular state or university outside J&K?`;
  }

  // Admission process
  if (lowerMessage.includes('admission') || lowerMessage.includes('application') || lowerMessage.includes('entrance')) {
    return `Here's a general admission timeline for J&K students:

📅 **Timeline:**
- January-March: Research colleges and courses
- April-May: Fill application forms, prepare for entrance exams
- June-July: Entrance exams (JEE, NEET, CUET)
- August-September: Merit lists and counseling
- September-October: Final admissions and college starts

📝 **Required Documents:**
- 10th and 12th mark sheets
- Character certificate
- Migration certificate (if applicable)
- Domicile certificate
- Category certificate (if applicable)
- Entrance exam scorecard

💡 **Pro Tips:**
- Apply to multiple colleges to keep options open
- Check specific eligibility criteria for each course
- Keep both local and outside options
- Research scholarship opportunities

Would you like specific information about any entrance exam or admission process?`;
  }

  // Scholarships and financial aid
  if (lowerMessage.includes('scholarship') || lowerMessage.includes('financial') || lowerMessage.includes('fee') || lowerMessage.includes('cost')) {
    return `Here are scholarship opportunities for J&K students:

💰 **Central Government Schemes:**
- PM Special Scholarship Scheme for J&K students
- Merit-cum-Means Scholarship
- National Scholarship Scheme
- Post Matric Scholarship

🎓 **State Government Schemes:**
- J&K Merit Scholarship
- Professional/Technical Course Scholarship
- Minority Scholarship schemes

🏛️ **University Scholarships:**
- Most universities offer merit-based scholarships
- Need-based financial assistance
- Sports and cultural scholarships

📋 **How to Apply:**
- Visit National Scholarship Portal (scholarships.gov.in)
- Check individual university websites
- Contact college admission offices directly

Remember to apply early and keep all documents ready. Need help with a specific scholarship application?`;
  }

  // Stream selection guidance
  if (lowerMessage.includes('stream') || lowerMessage.includes('science') || lowerMessage.includes('pcm') || lowerMessage.includes('pcb')) {
    return `Let me help you understand different streams and their career prospects:

🔬 **Science Stream:**
- **PCM (Physics, Chemistry, Math)**: Engineering, Architecture, Pure Sciences
- **PCB (Physics, Chemistry, Biology)**: Medicine, Pharmacy, Life Sciences
- **PCMB**: Keeps both engineering and medical options open

💼 **Commerce Stream:**
- Leads to CA, CS, Banking, Finance, Business Management
- Good for students interested in economics and business

🎨 **Arts/Humanities:**
- Civil Services, Teaching, Journalism, Psychology, Social Work
- Offers flexibility and diverse career options

💡 **My Recommendation:**
- Choose based on your interests, not just "what others think is best"
- Consider your strengths in different subjects
- Think about long-term career goals
- It's okay to explore interdisciplinary options

What subjects do you enjoy most, or what career field interests you?`;
  }

  // Career guidance
  if (lowerMessage.includes('career') || lowerMessage.includes('job') || lowerMessage.includes('future')) {
    return `Career planning is crucial for college selection. Here's what to consider:

🎯 **Self-Assessment:**
- What subjects do you excel in?
- What activities do you enjoy?
- Do you prefer creative or analytical work?
- Are you interested in research or practical application?

💼 **Emerging Career Fields:**
- Technology: AI, Cybersecurity, Data Science
- Healthcare: Telemedicine, Biotechnology
- Environment: Renewable Energy, Sustainability
- Creative: Digital Marketing, Content Creation

🌟 **For J&K Students:**
- Tourism and Hospitality (growing sector in J&K)
- Agriculture and Horticulture (traditional strengths)
- Civil Services (popular choice)
- Technology sector (remote work opportunities)

📈 **Career Strategy:**
- Choose a field with growth potential
- Consider both passion and practicality
- Build relevant skills early
- Network with professionals in your field of interest

What career field are you most curious about?`;
  }

  // Default response for unclear queries
  return `I understand you're looking for guidance on college selection. Here are some ways I can help:

🎓 **I can provide information about:**
- Engineering colleges and admission requirements
- Medical colleges and NEET preparation
- Arts, Commerce, and Science stream options
- Colleges outside J&K popular with local students
- Admission timelines and application processes
- Scholarship opportunities and financial aid
- Career guidance and stream selection
- Specific course details and eligibility

💬 **Try asking me:**
- "Tell me about engineering colleges in J&K"
- "What are the medical college options?"
- "I'm interested in commerce, what are my options?"
- "How do I apply for scholarships?"
- "What colleges outside J&K accept J&K students?"

How can I help you with your college selection today?`;
};

export const quickSuggestions = [
  { text: "Engineering colleges in J&K", category: "engineering" },
  { text: "Medical college admission", category: "medical" },
  { text: "Arts stream options", category: "arts" },
  { text: "Commerce colleges", category: "commerce" },
  { text: "Scholarship information", category: "financial" },
  { text: "Stream selection guidance", category: "guidance" },
  { text: "Admission timeline", category: "admission" }
];