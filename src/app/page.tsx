import Image from 'next/image'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar"
import Portrait from "@/components/Portrait";
import Section from "@/components/Section";
import SectionTitle from '@/components/SectionTitle';

export default function Home() {

  return (
    <section>
      <Navbar/>
      {/* Portfolio */}

      <div className=' grid place-items-center p-10'>
        <Image
          className=' '
          src="./images/uwo2.png"
          width={300}
          height={30}
          alt="uwo logo"
        />
      </div>
      {/* <div className=" min-h-[50px]" ></div> */}
      <div className=" p-10">
        <Section>
          <div className=" max-w-md text-black grid place-items-center">
            <div>
              <span>
                Hi, I&apos;m Jason Kwan. I&apos;m a 4th year Computer Science student at Western University and 
                <span className=" font-bold"> currently looking for software development-related internships!</span>
              </span>
            </div>

            </div>
          <div className="grid place-items-center">
            <Portrait/>
          </div>
        </Section>
      </div>
      
      
      {/* Projects */}
      <div className='bg-sky-100'>
        <SectionTitle>
          Projects
        </SectionTitle>
        <Section>
          <div>
            Western Nav
          </div>
          <div>
            projects
            multithreading trains
            2212
            3307
          </div>
        </Section>
        <Section>
          <div>
            Multithreading trains
          </div>
          <div>
            Image
          </div>
        </Section>
        <Section>
          <div>
            Alexa clone
          </div>
          <div>
            Image
          </div>
        </Section>
      </div>

      {/* About */}
      
      <SectionTitle>
        A little more about me
      </SectionTitle> 
      <div>
        <Section>
          <div className=' max-w-md'>
            I&apos;m hopelessly addicted to games and lifelong learning. I spend my spare time learning new technologies, or working on exciting new projects - usually both!
            I&apos;m currently obsessed with prototyping games in <span className=' font-bold'>Unity</span> in hopes of making a something extraordinary - someday.
          </div>
          <div>
            Image
          </div>
        </Section>
      </div>
    </section>
  )
}
