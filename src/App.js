import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const commands = [
    'whoami',
    'history',
    'echo $INTERESTS',
    'echo $WORK_EXPERIENCE',
    'curl https://skills.iamehsanullah.com | jq .',
    'echo $RESUME',
    'echo $CONTACT',
  ];
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState(commands[0]);
  const [commandsIdx, setCommandsIdx] = useState(0);

  useEffect(() => {
    if (text && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 50);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [currentIndex, text]);

  useEffect(() => {
    const revealText = () => {
      setIsVisible(true);
      setIdx(idx + 1);
      setCurrentText('');
      setCurrentIndex(0);
      setCommandsIdx(idx % 2 != 0 ? commandsIdx : commandsIdx + 1);
      setText(commands[commandsIdx]);
    };
    const delay = 300 + idx * 50;
    const timeoutId = setTimeout(revealText, delay);

    return () => clearTimeout(timeoutId);
  }, [idx]);

  return (
    <div className="App">
      
      <div className="body">
        <div className="code-block">
          <div>
            <span id="a">ehsanullah@megatron</span>:<span id="b">~</span>
            <span id="c">$</span>
            <span id="cmd"> {idx === 0 ? currentText : commands[0]}</span>
          </div>
          {isVisible && idx >= 1 && <span id="g">Ehsan Ullah</span>}
        </div>
        {isVisible && idx >= 2 && (
          <div className="code-block">
            <div>
              <span id="a">ehsanullah@megatron</span>:<span id="b">~</span>
              <span id="c">$</span>
              <span id="cmd"> {idx === 2 ? currentText : commands[1]}</span>
            </div>
            {isVisible && idx >= 3 && (
              <span id="z" style={{ fontWeight: 'bold' }}>
                MSCS from University of Bonn<br />
                past: BSCS from FAST NUCES, Lahore
              </span>
            )}
          </div>
        )}
        {isVisible && idx >= 4 && (
          <div className="code-block">
            <div>
              <span id="a">ehsanullah@megatron</span>:<span id="b">~</span>
              <span id="c">$</span>
              <span id="cmd"> {idx === 4 ? currentText : commands[2]}</span>
            </div>
            {isVisible && idx >= 5 && (
              <div className="code-block">
                <span id="f">["Backend Development", "DevOps", "Machine Learning"]</span>
              </div>
            )}
          </div>
        )}
        {isVisible && idx >= 6 && (
          <div className="code-block">
            <div>
              <span id="a">ehsanullah@megatron</span>:<span id="b">~</span>
              <span id="c">$</span>
              <span id="cmd"> {idx === 6 ? currentText : commands[3]}</span>
            </div>
            {isVisible && idx >= 7 && (
              <>
                {/* <div className="code-block" id="w">
                  <div>================</div>
                  <div>WORK EXPERIENCE</div>
                  <div>================</div>
                </div> */}
                <div className="code-block">
                  <div id="z">
                    [04/2025 - present] <b>Software Engineer</b>,{' '}
                    <span id="link">
                      <a
                        href="https://www.metapolaris.com/"
                        target="blank"
                      >
                        Metapolaris GmbH
                      </a>
                    </span>
                  </div>
                  <div id="z">
                    [05/2024 - present] <b>Research Assistant</b>,{' '}
                    <span id="link">
                      <a
                        href="https://hrl.uni-bonn.de"
                        target="blank"
                      >
                        Humanoid Robotics Lab - University of Bonn
                      </a>
                    </span>
                  </div>
                  <div id="z">
                    [07/2024 - 12/2025] <b>Research Assistant</b>,{' '}
                    <span id="link">
                      <a href="https://www.dzne.de" target="blank">
                        DZNE - German Center for Neurodegenerative Diseases
                      </a>
                    </span>
                  </div>
                  <div id="z">
                    [07/2023 - 03/2024] <b>Software Engineer</b>,{' '}
                    <span id="link">
                      <a href="https://www.ssidecisions.com/" target="blank">
                        Strategic Systems International
                      </a>
                    </span>
                  </div>
                  <div id="z">
                    [04/2023 - 06/2023] <b>Backend Engineer</b>,{' '}
                    <span id="link">
                      <a href="https://www.dubizzlelabs.com/" target="blank">
                        Dubizzle Labs
                      </a>
                    </span>
                  </div>
                  <div id="z">
                    [07/2022 - 09/2022] <b>Software Engineer Intern</b>,{' '}
                    <span id="link">
                      <a href="https://www.confiz.com/" target="blank">
                        Confiz
                      </a>
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
        {isVisible && idx >= 8 && (
          <div className="code-block">
            <div>
              <span id="a">ehsanullah@megatron</span>:<span id="b">~</span>
              <span id="c">$</span>
              <span id="cmd"> {idx === 8 ? currentText : commands[4]}</span>
            </div>
            {isVisible && idx >= 9 && (
              <>
                <div className="code-block">
                  <pre id="z" style={{ margin: 0 }}>
                    {'{\n'}
                    {'  '}<span style={{ color: '#90EE90' }}>code: </span>{'["Python", "C++", "C#", "Java", "Typescript"],\n'}
                    {'  '}<span style={{ color: '#90EE90' }}>frameworks: </span>{'["React", "Express", "FASTAPI", "Spring Boot"],\n'}
                    {'  '}<span style={{ color: '#90EE90' }}>infrastructure: </span>{'["AWS", "Docker", "Kubernetes", "Nginx"],\n'}
                    {'  '}<span style={{ color: '#90EE90' }}>architecture: </span>{'["microservices", "event-driven-architecture"],\n'}
                    {'  '}<span style={{ color: '#90EE90' }}>interests: </span>{'["genai", "reinforcement learning"]\n'}
                    {'}'}
                  </pre>
                </div>
              </>
            )}
          </div>
        )}
        {isVisible && idx >= 10 && (
          <div className="code-block">
            <div>
              <span id="a">ehsanullah@megatron</span>:<span id="b">~</span>
              <span id="c">$</span>
              <span id="cmd"> {idx === 10 ? currentText : commands[5]}</span>
            </div>
            {isVisible && idx >= 11 && (
              <>
                  <div className="code-block" id="w">
                    {/* <div>================</div>
                    <div>RÉSUMÉ</div>
                    <div>================</div> */}
                    <div id="z">
                      <a href="/resume.html" target="_blank" rel="noopener noreferrer">resume.pdf</a>
                    </div>
                  </div>
              </>
            )}
          </div>
        )}
        {isVisible && idx >= 12 && (
          <div className="code-block">
            <div>
              <span id="a">ehsanullah@megatron</span>:<span id="b">~</span>
              <span id="c">$</span>
              <span id="cmd"> {idx === 12 ? currentText : commands[6]}</span>
            </div>
            {isVisible && idx >= 13 && (
              <>
                <div className="code-block" id="w">
                  {/* <div>================</div>
                  <div>CONTACT</div>
                  <div>================</div> */}
                  <div id="z">
                    [
                    <span id="link">
                      <a href="mailto:ehsanullahdev@gmail.com">
                        email
                      </a>
                    </span>
                    ]
                    [
                    <span id="link">
                      <a href="https://github.com/imehsanullah" target="blank">
                        github
                      </a>
                    </span>
                    ] [
                    <span id="link">
                      <a href="https://www.linkedin.com/in/iamehsanullah/" target="blank">
                        linkedin
                      </a>
                    </span>
                    ] 
                    
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
