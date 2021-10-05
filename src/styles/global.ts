import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
 :root {
        --background: #f1f1f1;
        --primary: #6C6AF2;
        --primary-dark: #4F4DD4;
        --light-gray: #F4F4F4;
        --white: #fff;
        --green: #33CC95;
        --red: #DF2424;
        --text-title: #B7B7B7;
        --text-color: #101010;
        --text-body: #999999;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong, b {
        font-weight: 600;
    }
    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    button {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    html::-webkit-scrollbar {
        width: 10px;
        padding: 10px;
        margin: 10px;
    }
    html::-webkit-scrollbar-thumb {
        background-color: #0f0f0f;
        margin: 5px;
        padding: 10px;
        border-radius: 10px;
    }
    html::-webkit-scrollbar-track {
        background-color: #dddd;
}
`;
