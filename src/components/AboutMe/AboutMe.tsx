import Container from '@mui/material/Container';

import { AboutMeWrapper } from './styled';

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <Container>
        <p>Web</p>
        <p>Developer</p>
      </Container>

      <Container>
        <div>
          <h2>Episode IV</h2>
          <h1>A NEW HOPE</h1>
          <p>This is the time</p>
          <p>you need someone you can rely on,</p>
          <p>someone who is your only hope...</p>
          <p>...so Hi! I'm Lyubava</p>
          <p>I can help you realize your ideas</p>
          <p>and also i just enjoy doing web dev as well</p>
          <p>Just contact me and I'll deal with it.</p>
        </div>
      </Container>
    </AboutMeWrapper>
  );
};

export default AboutMe;
