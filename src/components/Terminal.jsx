import React, { useState, useEffect, useRef } from "react";
import Output from "./Output";
import Input from "./Input";
import { commands as commandMap } from "../command";

function Terminal() {
  const [history, setHistory] = useState([]);
  const [isInputVisible, setIsInputVisible] = useState(true);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const typeWriterEffect = (text) => {
  return new Promise((resolve) => {
    let currentText = "";
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        currentText += text[index];
        setHistory((prev) => [...prev.slice(0, prev.length - 1), currentText]);
        index++;
      } else {
        clearInterval(interval);
        resolve();
      }
    }, 25); 
  });
};

  const handleCommand = async (inputText) => {
    const trimmed = inputText.trim().toLowerCase();
    if (!trimmed) return;
  setIsInputVisible(false);
    if (trimmed === 'clear') {
      setHistory([]);
        setIsInputVisible(true);
      return;
    }

    const response = commandMap[trimmed] || `Unknown command ${trimmed}. Use help for command reference.`;
    const lines = response.split('\n');

    // Add the command to history
    setHistory((prev) => [...prev, `> ${trimmed}`]);

    // Type out each line of the response
      for (let i = 0; i < lines.length; i++) {
    await typeWriterEffect(lines[i]); 
    setHistory((prev) => [...prev,'']);
    if (i < lines.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1500)); 
    }
  }
  setIsInputVisible(true);
  };

  return (
     <div className="mb-8 space-y-1  font-mono">
      <div className="mb-4 font-bold ">SYSTEM HACKER TERMINAL V1.1
         <pre className="whitespace-pre">
{` 
 ▄︻デ═一  
 (⌐■_■) ☠  
/███████]  
░░░░░░░░░ 
                                           
Welcome to Terminal v1.1
Type 'help' to begin.
`}
    </pre>
      </div>
      <Output history={history} />
      {isInputVisible && <Input onSubmit={handleCommand} />}
      <div ref={bottomRef} className="mb-12" ></div>
    </div>
  );
}

export default Terminal;
