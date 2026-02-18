import{c as e,o as t,t as n}from"./index-BpNWBXYa.js";t();var r=e(n(),1),i=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(`style`,{children:`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', system-ui, sans-serif;
        }

        :root {
          --bg-start: #1a1f36;
          --bg-end: #0b0e1a;
          --text-color: #ffffff;
          --muted-text: rgba(255, 255, 255, 0.75);
          --primary: #1337ec;
          --secondary: #5f7cff;
          --glitch-pink: #ff4ecd;
          --blob-opacity: 0.6;
        }

        @media (prefers-color-scheme: light) {
          :root {
            --bg-start: #f4f6ff;
            --bg-end: #e6e9ff;
            --text-color: #0b0e1a;
            --muted-text: rgba(11, 14, 26, 0.7);
            --primary: #1337ec;
            --secondary: #5f7cff;
            --glitch-pink: #e6007a;
            --blob-opacity: 0.45;
          }
        }

        body {
          background: radial-gradient(circle at top, var(--bg-start), var(--bg-end));
        }

        .page {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          color: var(--text-color);
          position: relative;
        }

        .blob {
          position: absolute;
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 50%;
          filter: blur(120px);
          opacity: var(--blob-opacity);
          animation: float 12s infinite ease-in-out;
        }

        .blob.one {
          top: -100px;
          left: -100px;
        }

        .blob.two {
          bottom: -100px;
          right: -100px;
          animation-delay: 4s;
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-40px); }
          100% { transform: translateY(0); }
        }

        .container {
          text-align: center;
          z-index: 2;
          max-width: 500px;
          padding: 2rem;
        }

        .glitch {
          font-size: 8rem;
          font-weight: 800;
          position: relative;
          animation: glitch 2s infinite;
        }

        .glitch::before,
        .glitch::after {
          content: "404";
          position: absolute;
          left: 0;
          width: 100%;
          overflow: hidden;
        }

        .glitch::before {
          color: var(--primary);
          top: -2px;
          animation: glitchTop 1.5s infinite;
        }

        .glitch::after {
          color: var(--glitch-pink);
          top: 2px;
          animation: glitchBottom 1.5s infinite;
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }

        @keyframes glitchTop {
          0% { clip-path: inset(0 0 80% 0); }
          50% { clip-path: inset(0 0 20% 0); }
          100% { clip-path: inset(0 0 80% 0); }
        }

        @keyframes glitchBottom {
          0% { clip-path: inset(80% 0 0 0); }
          50% { clip-path: inset(20% 0 0 0); }
          100% { clip-path: inset(80% 0 0 0); }
        }

        h2 {
          font-size: 1.6rem;
          margin: 1rem 0 0.5rem;
        }

        p {
          color: var(--muted-text);
          margin-bottom: 2rem;
        }

        .btn {
          display: inline-block;
          padding: 0.75rem 1.75rem;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: #fff;
          text-decoration: none;
          border-radius: 999px;
          font-weight: 600;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(19, 55, 236, 0.35);
        }
      `}),(0,r.jsxs)(`div`,{className:`page`,children:[(0,r.jsx)(`div`,{className:`blob one`}),(0,r.jsx)(`div`,{className:`blob two`}),(0,r.jsxs)(`div`,{className:`container`,children:[(0,r.jsx)(`div`,{className:`glitch`,children:`404`}),(0,r.jsx)(`h2`,{children:`Page Not Found`}),(0,r.jsx)(`p`,{children:`The page you’re looking for doesn’t exist or was moved.`}),(0,r.jsx)(`a`,{href:`/portfolio`,className:`btn`,children:`Back to Home`})]})]})]});export{i as default};