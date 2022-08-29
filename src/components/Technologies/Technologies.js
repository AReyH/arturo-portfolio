import React from 'react';
import { DiFirebase, DiReact, DiZend,DiPython,DiJavascript,DiNodejs } from 'react-icons/di';
import { SiTensorflow,SiMicrosoftazure,SiScikitlearn } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <br/>
    <br/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of technologies 
    </SectionText>
    <List>
      <ListItem>
        <DiPython size='3rem'/>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            4+ years of experience <br/>
            with Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiTensorflow size='3rem'/>
        <ListContainer>
          <ListTitle>Tensorflow</ListTitle>
          <ListParagraph>
          2+ years of experience <br/>
          with Tensorflow
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem'/>
        <ListContainer>
          <ListTitle>Scikit Learn</ListTitle>
          <ListParagraph>
          3+ years of experience <br/>
          with Scikit Learn
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript size='3rem'/>
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
          <ListParagraph>
          1+ years of experience <br/>
          with Javascript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>React</ListTitle>
          <ListParagraph>
          1+ years of experience <br/>
          with React
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size='3rem'/>
        <ListContainer>
          <ListTitle>Node.js</ListTitle>
          <ListParagraph>
          1+ years of experience <br/>
          with Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiMicrosoftazure size='3rem'/>
        <ListContainer>
          <ListTitle>Azure</ListTitle>
          <ListParagraph>
          1+ years of experience <br/>
          with Azure
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
