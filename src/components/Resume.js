import React from 'react'
import {Animated} from "react-animated-css";
import Experience from "./Experience"


const Resume = () => {
  return (
    <Animated animationIn="fadeInRight" animationOut="fadeOutLeft" >
      <Animated animationIn="flipInX" animationInDelay={500} >
        <h2 className="title">Resume</h2>
      </Animated>
        <div className="resume content">
          <section className="profile">
            <h2 className="">Full-Stack Developer</h2>
            <h3 className="">Adept at designing, coding, and testing innovative applications as per customer requirements, while ensuring excellent user experience with optimal performance, security, and quality.</h3>
            <p>Multifaceted professional with expertise in collaborating with teams, educating and guiding team members, steering workflow management efforts, and managing databases. Instrumental in collecting and processing data using Node.js and Express.js, while managing databases with SQL. Proven ability to identify clients’ needs and recommend appropriate solutions, including creation of pixel-perfect applications and writing clean codes. Exceptional leadership, communication, interpersonal, organizational, relationship-building, and communication skills evidenced by ability to excel at establishing and nurturing collaborative relationships with employees, management, students, and clients. </p>
          </section>
          <section >
            <div className="filled">
              <h3>Technical Proficiencies</h3>
            </div>
            <ol className="techProficiencies">
              <li> <h5>Tools / Software: </h5><p>Git, Redux, Postman, Heroku, AWS, Material UI, Google Cloud, Adobe Creative Suite</p></li>
              <li> <h5>Languages: </h5>JavaScript (Vanilla, Node, React, Express), HTML, CSS (SaaS), MySQL</li>
              <li> <h5>Competencies: </h5>Project Management, Full Stack Web Development, Software Application Development, Customer Service, Cross-functional Collaboration, Team Leadership & Training, Problem Solving, Collaboration, Organization, Creativity, Strong Work-Ethic </li>
            </ol>
          </section>
          <section>
            <div className="filled">
              <h3>Professional Experience</h3>
            </div>
            <div className="examples">
              <Experience company={"Tapestry Dance, Austin, TX"} date={"2019-Present"} title={"Principal Dancer / Systems Manager"} 
              description={"Engage with a team of fellow dancers under artistic director to develop and present full-length productions. Serve as Systems Manager, building and overseeing virtual classroom platform for hosting online dance classes, while maintaining the company website. Administer client email database and ensure compliance with CAN-SPAN standards."} 
              item1={<li>Drove conversion of in-person academy program to customized online platform due to COVID-19 pandemic, that enabled 94% of personnel to stay on payroll.</li>} 
              item2={<li>Mitigated need to recruit new team members by performing dual roles in organizational operations with projected annual savings of $50K.</li>} 
              item3={<li>Assisted in securing over $65k in revenue from donations, ticket sales, and student registrations by serving as a volunteer on the Marketing Committee in 2020.   
                <ol>
                  <li className="subList">$58K in registration alone due to conversion of classes to the online platform.</li>
                  <li className="subList">$4,700 from online ticket sales from productions created for virtual performance.</li>
                  <li className="subList">$3,800 in fundraising efforts during Amplify Austin and sale of “Dance Floor Art Project” art pieces.</li>
                </ol>
                </li>}
                  />
              <Experience company={"Various Households, Denver, CO & Austin, TX"} date={"2013-Present"} title={"Nanny"} 
              description={"Render day-to-day care for children up to 10 years old, involving school pick-up, activity transportation, meals preparation, and homework assistance. Provide customized childcare for a wide range of ages and developmental needs. Plan and organize engaging activities which promote and incorporate learning through play. Assist with household chores, such as laundry, dishes, and cleaning. "} 
              item1={<li>The accomplishments I’ve achieved and growth I’ve caused in this position can’t really be measured by a number. How do you measure teaching a kid how to share, ride a bike, or tie their own shoes?</li>} 
              />
              <Experience company={"Self-Employed, Colorado, Texas, NYC"} date={"2008 – 2020"} title={"Company Manager, Dance Instructor "} 
              description={"The driving force behind the growth of Colorado’s tap dance community and the establishment and ongoing success of the state’s longest-running professional tap dance company, Rocky Mountain Rhythm. <br> Prepared and delivered lesson plans in a variety of learning styles, while tracking student progress, teaching life-lessons, and growing students’ self-confidence. Serve as instructor at various dance studios, festivals, and workshops and as founder and artistic director of own dance company, Rocky Mountain Rhythm started in 2014 as a Facebook group to support connecting tap dancers and share a love of art form within the community. Added a website in 2015 with a directory of reputable local teachers and classes; now a professional company."} 
              item1={<li>Increased monthly registration profits by over 30% and optimized client retention, that amplified enrollment numbers, organized high-level classes by establishing interest, and fostered customer relationships within low-lever class offerings.</li>} 
              item2={<li>Played a key role in organizing and marketing new workshops, summer camps, and events to successfully raise special event revenue by 600% annually. </li>} 
              item3={<li>Grew student base from less than five to more than 50 during first year.</li>}
              />
              <Experience company={"Claire Young Photography LLC, Denver Metro Area"} date={"2010 – 2017"} title={"CEO / Photographer"} 
              description={"Produced portrait and commercial photographs. Oversaw marketing, finances, record keeping, client communications, and workflow management activities. Managed artistic and business aspects of the company. Created marketing and advertising plans to attract new clients. Built positive relationships with clients to ensure comfortability during photo sessions and achieve genuine results. Examined and anticipated clients’ needs. Used and maintained all camera and studio lighting equipment. Edited photos and managed photo storage. Designed graphics for announcements, holiday greeting cards, and wedding invitations."} 
              item1={<li>Optimized portrait session profits by 300% with High School Senior Portrait Model campaign. </li>} 
              item2={<li>Utilized dance expertise to offer the highest quality dance photos to local dance events.</li>}/>            
            </div>
          </section>
          <section className="projects">
            <div className="filled">
              <h3>Key Projects</h3>
            </div>
            <div className="examples">
              <Experience company={"Project: Virtual Dance Studio"} date={"3/2021 – Present"} 
              item1={<li>Building a full-stack web application that facilitates users in scheduling and hosting online dance classes, including scheduling, payment, and video conferencing.</li>} 
              item2={<li>Leverage JavaScript (Node, React, Express), MySQL, and Material UI.</li>}
              /> 
              <Experience company={"Project: Feed Me, Seymour!    "} date={"3/2021 – Present"} 
              item1={<li>Developing a full-stack web application for monitoring and tracking houseplant care by using customized Plant API to enable users to view list of common houseplants and care instructions, add plants to database/account, track watering schedule. </li>} 
              item2={<li>Utilized Node.js, Express.js, React.js, AWS, MySQL, HTML, CSS, and Material UI. </li>}
              /> 
            </div>
            </section>
            <section>
            <div className="filled">
              <h3>Education</h3>
            </div>
            <div className="education">
              <div>
                <h3>Full Stack Software Engineering</h3>
                <p>Austin Coding Academy, Austin, TX, Anticipated Graduation 5/2021</p>
              </div>
              <div>
                <h3>Associates Degree of General Studies (Graduated with Honors – 4.0GPA)</h3>
                <p>Red Rocks Community College Lakewood, CO, 5/2012</p>
                <p>Member, Phi Theta Kappa Honors Society</p>
              </div>
            </div>
          </section>
      </div>
    </Animated>
  )
}

export default Resume
