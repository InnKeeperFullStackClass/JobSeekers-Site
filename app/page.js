import DefaultLayout from "@/layout/DefaultLayout";
import React from "react";
import Image from "next/image";
import HomeHero from "../public/mentoringpic1.jpg";

import Link from "next/link";

export default function Home() {
  return (
    <DefaultLayout>
      <div>
        
        <div className="relative">
          <Image
            src={HomeHero}
            alt="homehero"
            className="max-w-full"
            priority
          />
          
          
        </div>

        <div className="mt-9 mb-7">
          <div>
            <p>Are you a young job-seeker or a budding entrepreneur? Do you feel the burning desire to make the best of your life, but find yourself in need of guidance and support? Look no further! [Platform Name] is here to empower you with the knowledge, skills, and mentorship necessary to thrive in today's dynamic world.
</p>
<p>We understand that the journey towards a fulfilling career can be daunting. The path is rarely linear, and the challenges can seem insurmountable. But we believe that with the right mentorship and guidance, you have the power to overcome any obstacle and unlock your true potential.</p>
<hr className="bg-gray-300"/>
          </div>
        </div>
        <div className="mt-9">
          <h4>Here's why PurposefulPath is your perfect companion on this transformative journey:
</h4>
<div>
  <div>
    <p>1</p>
    <p>Expert Mentors: Our platform boasts a carefully curated network of experienced mentors who have successfully navigated the professional landscape. They have walked the path you aspire to traverse and are eager to share their wisdom with you. Our mentors are not only accomplished professionals but also passionate about nurturing the next generation of talent. They will provide you with the insights, strategies, and support you need to excel.
</p>
  </div>
  <div>
    <p>2</p>
    <p>Tailored Guidance: We understand that each individual's aspirations and challenges are unique. That's why we offer personalized mentorship tailored to your specific goals and ambitions. Whether you're seeking guidance on job search strategies, interview preparation, career pivots, or launching your own venture, our mentors will provide program referrals, targeted advice and actionable steps to propel you forward.
</p>
  </div>
  <div>
    <p>3</p>
    <p>Skill Development: At PurposefulPaths, we believe that true success goes beyond mere knowledge. From communication and leadership skills to financial literacy and problem-solving, our resources are curated to bridge the gap between academic/technical skills and real-world success.
</p>
  </div>
  <div>
    <p>4</p>
    <p>Inspiring Community: Surround yourself with a community of ambitious and like-minded individuals who share your passion for making a difference. Connect with fellow job-seekers, entrepreneurs, and mentors who understand your journey and can provide valuable insights and support. Collaborate, network, and inspire one another as you collectively shape a better future.
</p>
  </div>
  <div>
    <p>5</p>
    <p>Empowering Resources for Impact: Access a wealth of resources, articles, and thought-provoking content to ignite your inspiration and deepen your understanding of the professional world. Stay updated on the latest industry trends, emerging opportunities, and innovative strategies that will give you a competitive edge. Our resources are designed to keep you ahead of the curve and equip you with the knowledge to seize every opportunity.
</p>
  </div>
</div>

        </div>
        <hr/>

        <div>
          <h5>Unleash your potential. Embrace your dreams. Sign up now and embark on a transformative mentorship journey with PurposefulPath.
</h5>
<p>Together, we will make the best of life!</p>
        </div>
        <div>
          <h4>Testimonials</h4>
          <div>
            <div>
            Working with Damilola was quite an interesting one. I was at a very critical point in my life when our paths crossed and I'll always be grateful for that opportunity. There wasn't a dull moment from top-notch deliverables and emphasising the outsider's perspective in any given task informed my diligence while working with him. Thanks for all you do for me. I recommend Damilola because you can rest assured of a healthy work-life balance and fulfilment in career achievement
 - Adebanjo Adeniji

            </div>
            <div>I worked with Dami as my team lead. He led with dedication to his work and inspiration to his team members. Working with him, you would definitely see his zeal to work, gusto and hands-on approach to problem-solving, team building & leadership. He is motivated and has lots of knowledge in his field.
 - Tola Oladele
</div>
            <div>You rarely come across standout talents like Damilola, although he is technically my manager, rarely does it feel that way. He is focused on being a great coach and a mentor. He understands that great leadership requires more than delegation, it is about equipping and inspiring the team to create a safe environment where they can be themselves and where their opinions matter.  
- Olayemi Obademi MBA.</div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
