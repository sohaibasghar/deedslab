import { Section } from "@/components/ds/section";
import { Intro } from "@/components/ds/intro";
import { Figure } from "@/components/ds/figure";

export function AiNativeSection({ stack: dlS = true }) {
  return (
    <Section tone="ink">
      <div className="dl-stack dl-stack--lg">
        <p className="label dl-muted">AI-native · AI-first</p>
        <Intro title="Built [[AI-first]], from the first commit." />
        <p className="body-l dl-muted dl-measure">
          We're an AI-native studio. AI runs through how we work and what we
          ship, so products reach users faster and get smarter after launch.
        </p>
        <div className="dl-cols-3">
          <article className="dl-card">
            <Figure name="overlap" />
            <h3 className="h5">AI in how we build.</h3>
            <p className="body dl-muted">
              Agents scope, write, test and review code alongside our engineers,
              so you see a working build in days, not weeks.
            </p>
          </article>
          <article className="dl-card">
            <Figure name="keys" />
            <h3 className="h5">AI in what we build.</h3>
            <p className="body dl-muted">
              Assistants, automation, search and prediction designed into the
              product from day one, not bolted on later.
            </p>
          </article>
          <article className="dl-card">
            <Figure name="steps" />
            <h3 className="h5">Engineers own every line.</h3>
            <p className="body dl-muted">
              AI speeds us up. People decide what ships: every change is
              reviewed, tested and yours from the first commit.
            </p>
          </article>
        </div>
        {dlS ? (
          <h3
            className="h5"
            style={{
              marginTop: "8px",
            }}
          >
            Our AI stack
          </h3>
        ) : null}
        {dlS ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
              gap: "16px",
            }}
          >
            <div
              className="dl-card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <svg
                viewBox="0 0 100 101"
                width={32}
                height={32}
                aria-label="Claude"
                role="img"
                style={{
                  marginBottom: "10px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    '<path fill="#D97757" d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z"/>',
                }}
              />
              <span className="h5">Claude</span>
              <span className="body-s dl-muted">
                Reasoning, coding and agents
              </span>
            </div>
            <div
              className="dl-card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <svg
                viewBox="20 12 460 522"
                width={32}
                height={32}
                aria-label="Cursor"
                role="img"
                style={{
                  marginBottom: "10px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    '<path fill="currentColor" d="m466.383 137.073-206.469-119.2034c-6.63-3.8287-14.811-3.8287-21.441 0l-206.4586 119.2034c-5.5734 3.218-9.0144 9.169-9.0144 15.615v240.375c0 6.436 3.441 12.397 9.0144 15.615l206.4686 119.203c6.63 3.829 14.811 3.829 21.441 0l206.468-119.203c5.574-3.218 9.015-9.17 9.015-15.615v-240.375c0-6.436-3.441-12.397-9.015-15.615zm-12.969 25.25-199.316 345.223c-1.347 2.326-4.904 1.376-4.904-1.319v-226.048c0-4.517-2.414-8.695-6.33-10.963l-195.7577-113.019c-2.3263-1.347-1.3764-4.905 1.3182-4.905h398.6305c5.661 0 9.199 6.136 6.368 11.041h-.009z"/>',
                }}
              />
              <span className="h5">Cursor</span>
              <span className="body-s dl-muted">AI-native code editor</span>
            </div>
            <div
              className="dl-card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <svg
                viewBox="8 8 176 176"
                width={32}
                height={32}
                aria-label="Gemini"
                role="img"
                style={{
                  marginBottom: "10px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    '<defs><linearGradient id="dlGem" x1="20" y1="170" x2="175" y2="25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1A73E8"/><stop offset=".5" stop-color="#6C8CFF"/><stop offset="1" stop-color="#A87FFB"/></linearGradient></defs><path fill="url(#dlGem)" d="M164.93 86.68c-13.56-5.84-25.42-13.84-35.6-24.01-10.17-10.17-18.18-22.04-24.01-35.6-2.23-5.19-4.04-10.54-5.42-16.02C99.45 9.26 97.85 8 96 8s-3.45 1.26-3.9 3.05c-1.38 5.48-3.18 10.81-5.42 16.02-5.84 13.56-13.84 25.43-24.01 35.6-10.17 10.16-22.04 18.17-35.6 24.01-5.19 2.23-10.54 4.04-16.02 5.42C9.26 92.55 8 94.15 8 96s1.26 3.45 3.05 3.9c5.48 1.38 10.81 3.18 16.02 5.42 13.56 5.84 25.42 13.84 35.6 24.01 10.17 10.17 18.18 22.04 24.01 35.6 2.24 5.2 4.04 10.54 5.42 16.02A4.03 4.03 0 0 0 96 184c1.85 0 3.45-1.26 3.9-3.05 1.38-5.48 3.18-10.81 5.42-16.02 5.84-13.56 13.84-25.42 24.01-35.6 10.17-10.17 22.04-18.18 35.6-24.01 5.2-2.24 10.54-4.04 16.02-5.42A4.03 4.03 0 0 0 184 96c0-1.85-1.26-3.45-3.05-3.9-5.48-1.38-10.81-3.18-16.02-5.42"/>',
                }}
              />
              <span className="h5">Gemini</span>
              <span className="body-s dl-muted">Multimodal models</span>
            </div>
            <div
              className="dl-card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <svg
                viewBox="4 4 200 200"
                width={32}
                height={32}
                aria-label="Antigravity"
                role="img"
                style={{
                  marginBottom: "10px",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    '<defs><mask id="agl_qx3qt_m" maskUnits="userSpaceOnUse" x="0" y="0" width="208" height="208"><path d="M175.277 181.636C185.19 189.071 200.06 184.115 186.429 170.484C145.536 130.83 154.211 21.7824 103.404 21.7824C52.5979 21.7824 61.2722 130.83 20.3793 170.484C5.50915 185.354 21.6185 189.071 31.5319 181.636C69.9464 155.614 67.4681 109.764 103.404 109.764C139.34 109.764 136.862 155.614 175.277 181.636Z" fill="white"/></mask><filter id="agl_qx3qt_blur" filterUnits="userSpaceOnUse" x="-200" y="-200" width="600" height="600"><feGaussianBlur stdDeviation="18"/></filter></defs><g mask="url(#agl_qx3qt_m)"><g filter="url(#agl_qx3qt_blur)"><ellipse cx="48.4073" cy="56.9522" rx="48.4073" ry="56.9522" transform="matrix(-0.112784 0.99362 -0.99362 -0.112781 125.452 -50.4013)" fill="#FFE432"></ellipse></g><g filter="url(#agl_qx3qt_blur)"><ellipse cx="189.699" cy="57.2113" rx="62.6685" ry="64.0462" transform="rotate(76.9243 189.699 57.2113)" fill="#FC413D"></ellipse></g><g filter="url(#agl_qx3qt_blur)"><ellipse cx="3.91232" cy="71.109" rx="65.4966" ry="84.8483" transform="rotate(74.1257 3.91232 71.109)" fill="#00B95C"></ellipse></g><g filter="url(#agl_qx3qt_blur)"><ellipse cx="3.91232" cy="71.109" rx="65.4966" ry="84.8483" transform="rotate(74.1257 3.91232 71.109)" fill="#00B95C"></ellipse></g><g filter="url(#agl_qx3qt_blur)"><ellipse cx="8.56518" cy="73.714" rx="64.1966" ry="70.6746" transform="rotate(45.6065 8.56518 73.714)" fill="#00B95C"></ellipse></g><g filter="url(#agl_qx3qt_blur)"><ellipse cx="145.653" cy="205.274" rx="61.6425" ry="59.3594" transform="rotate(76.9243 145.653 205.274)" fill="#3186FF"></ellipse></g><g filter="url(#agl_qx3qt_blur)"><ellipse cx="71.3047" cy="75.2095" rx="71.3047" ry="75.2095" transform="matrix(-0.409539 0.912293 -0.912294 -0.409537 199.817 -49.6212)" fill="#FBBC04"></ellipse></g><g filter="url(#agl_qx3qt_blur)"><path d="M-9.81405 300.598C-48.858 285.271 17.867 159.164 34.4593 116.899C51.0515 74.6342 96.1535 52.7971 135.197 68.1246C174.241 83.4522 220.519 167.874 203.927 210.139C187.335 252.404 29.2299 315.926 -9.81405 300.598Z" fill="#3186FF"></path></g><g filter="url(#agl_qx3qt_blur)"><path d="M226.758 143.638C216.305 155.838 189.027 149.617 165.831 129.743C142.635 109.868 132.304 83.867 142.757 71.667C153.21 59.4669 180.488 65.6881 203.684 85.5624C226.88 105.437 237.211 131.438 226.758 143.638Z" fill="#749BFF"></path></g><g filter="url(#agl_qx3qt_blur)"><ellipse cx="181.461" cy="33.1492" rx="93.9817" ry="58.4218" transform="rotate(34.0763 181.461 33.1492)" fill="#FC413D"></ellipse></g><g filter="url(#agl_qx3qt_blur)"><ellipse cx="34.6363" cy="45.4552" rx="50.3612" ry="29.2875" transform="rotate(112.516 34.6363 45.4552)" fill="#FFEE48"></ellipse></g></g>',
                }}
              />
              <span className="h5">Antigravity</span>
              <span className="body-s dl-muted">Agent-first development</span>
            </div>
          </div>
        ) : null}
      </div>
    </Section>
  );
}
