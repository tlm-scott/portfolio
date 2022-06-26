
import React from 'react';
import weldImg from '../public/assets/projects/weldlearn.png';
import cryptoImg from '../public/assets/projects/crypto.png'
import taxImg from '../public/assets/projects/tax.png'
import quoteImg from '../public/assets/projects/quote.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Welding Course'
            backgroundImg={weldImg}
            projectUrl='/weld'
            tech='WordPress PHP'
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'

          />
          <ProjectItem
            title='Tax Site'
            backgroundImg={taxImg}
            projectUrl='/tax'
            tech='WordPress PHP'

          />
          <ProjectItem
            title='Quote Site'
            backgroundImg={quoteImg}
            projectUrl='/quote'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;