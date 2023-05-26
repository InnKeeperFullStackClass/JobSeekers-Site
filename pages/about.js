import React from "react";
import Image from "next/image";
import AboutHero from "../public/Dami Portrait (4).jpg";

import DefaultLayout from "@/layout/DefaultLayout";

export default function About() {
  return (
    <DefaultLayout>
      <div>
        <div className="flex mt-9">
          <div className="w-full md:w-1/2">
            <Image
              src={AboutHero}
              alt="abouthero"
              className="max-w-full"
              priority
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-3xl font-bold mb-4">
              About PurposefulPath's 'Growth Convener'
            </p>

            <p className="text-gray-700">
              Damilola is a seasoned business and project development
              practitioner with a first degree in Chemical Engineering. His
              multisectoral experience spanning almost two decades hovers around
              Business Development, Project Management, Customer Service, Client
              Interface Management and Contract Administration for Oil & Gas,
              Telecoms, infrastructure projects and ‘the emerging Technology
              Space in West Africa’. His guiding principles are Integrity,
              Creativity, Excellence and Continuous learning.
            </p>
            <p>
              He is currently the CEO at 8thGear Partners Ltd – a Venture Studio
              that also provides enterprise services to Start-ups and SMEs that
              require digital transformation. At 8thGear he also provides
              project delivery services to partner development agencies,
              globally.
            </p>
            <p>
              In his career, He has had the privilege of leading teams that have
              worked with organizations and donor funders such as the Bill and
              Melinda Gates Foundation, University of California (San Diego),
              United States Africa Development Fund, Lagos State Employment
              Trust Fund, State and Federal Governments Agencies as well as
              corporates in Nigeria. He developed most of these opportunities
              and Projects from conceptualization, through proposals,
              negotiation and contract awards, to execution. He has also
              supervised rigorous impact assessments with several local and
              international stakeholders involved.
            </p>
            <p>
              His work with Wennovation Hub/LoftyInc Capital Management exposed
              him to opportunities to support start-ups through various
              incubation programs and some handholding towards fundraising from
              both international and Local Angels and VCs. On the back of this
              experience, He has an understanding of the Innovation landscape,
              especially in Nigeria where He has built a sound professional
              network and can manage high-level relationships, especially with
              Government and International NGOs.{" "}
            </p>
            <p>
              His first degree in Chemical Engineering was earned in 2008 from
              Lagos State University. He also earned his Executive MBA with
              Quantic School of Business and Technology, Washington DC in May
              2021. He had earlier also earned his Certificate Associate in
              Project Management from the Project Management Institute in 2011.
            </p>
            <p>
              He has won several meritorious awards on different platforms, some
              of which are a service excellence award from the Lagos Chapter of
              the Nigerian Society of Chemical Engineers (NSChE); several awards
              for community service as Youth President of All Saints Anglican
              Church, Ikosi and winner of the Lagos Merck Accelerator 2019
              cohort for Pronov (a Pharma tech Start-up) as COO.
            </p>
            <p>
              He loves to see epic movies, read widely and swim at leisure. He
              identifies as a guitarist, singer/songwriter, and gardener. He is
              happily married with two intelligent daughters.
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
