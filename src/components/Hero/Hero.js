import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Arturo Rey <br/>
      </SectionTitle>
      <SectionText>
        Data Scientist - Mechanical Engineer.
      </SectionText>
      
    </LeftSection>
  </Section>
);

export default Hero;

//<Button onClick={() => window.location = 'https://www.linkedin.com/in/ingarturorey/'}>Learn More</Button>