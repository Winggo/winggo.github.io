import React from 'react';
import tsx from '../../static/tsx.png';
import styles from './blogs.module.css';
import Fade from 'react-reveal/Fade';
import Footer from '../Footer';
import ReactEmbedGist from 'react-embed-gist';
import { Container } from 'react-bootstrap';


const MigrationBlog = () => {
    document.title = 'Winggo Tse — TypeScript';

    return (
        <Container>
            <div className={styles.page}>
                <Fade>
                    <div className={styles.picContainer}>
                        <img src={tsx} className={styles.frontPic} alt='Migration from JS to TS.' />
                    </div>
                </Fade>

                <Fade>
                    <div className={styles.content}>
                        <h1 style={{textAlign: 'center'}}>
                            Migrating to TypeScript
                        </h1>
                        <p>
                            TypeScript has always been a language I long to adopt after learning just  
                            how much time it has saved for frontend teams from a variety of companies. 
                            Some of these companies include Airbnb, Microsoft, Asana, Lyft, and Slack. 
                            And they all migrated to TypeScript for one good reason - Typescript brings 
                            predictability. TypeScript enables JavaScript to scale.
                            When working with a codebase at that level with various teams and many 
                            moving parts, the type-checking feature TypeScript provides ensures your 
                            code works exactly like you intend it to when you type it. Type-checking 
                            provides you and everyone else a peace of mind whenever code is pushed. And all this 
                            talk is not without proof, Airbnb reported 38% of bugs in its frontend 
                            codebase could have been preventable with TypeScript according to the 
                            company's postmortem analysis. 
                        </p>
                        <p>
                            I've always been a programmer who prefers dynamically typed languages, which 
                            is why JavaScript and Python are my most beloved languages. But after 
                            learning about how TypeScript has prevented numerous headaches by catching 
                            code mistakes right when you type it, rather than having to deal with linking 
                            peices of code to a bug five files away, I decided to give this statically typed 
                            language a try. I've just explained why I decided to migrate and add TypeScript 
                            support to my codebase, let's move onto how.
                        </p>
                        <p>
                            When I began this project of developing my site, create-react-app (CRA) was where I went 
                            for my React ecosystem setup. (If you're starting out, I'll recommend taking a look 
                            into Next.js - it's a brilliant framework on top of React that provides 
                            server-side rendering as well.) 
                            When I first started thinking about migrating to TypeScript, I thought it would be 
                            a major headache. CRA bootstraps everything up for you, therefore saving you the trouble of 
                            configuration, but that also means less control and customization. You can't modify your 
                            webpack.config.json for example, since it's been preconfigured. The 
                            alternative is to eject which doesn't sound like the best idea. So there's a problem: 
                            you need to reconfigure webpack to compile TypeScript into JavaScript for your bundles. 
                            Several others have found ways 
                            around this, by using custum plugins like CopyWebpackPlugin and react-scripts-ts. 
                        </p>
                        <p>
                            With the realease of react-scripts v2.1.0, CRA now natively supports TypeScript, which give me 
                            a major sigh of relief. The first step is to add the following modules.
                        </p>
                        <p>
                            <code>
                                yarn add -D typescript @types/node @types/react @types/react-dom @types/jest
                            </code> 
                        </p>
                        <p>
                            I then proceeded to rename the extensions of all my react files to <code>.tsx</code>, which 
                            should throw out a load of errors. I recommend doing this one file at a time. Fix the errors,
                            add @type definition dependencies as you need them, and move onto the next file. When you have one file 
                            migrated to TypeScript I suggest running the frontend server to make sure everything still works. 
                            If successful, there should be a <code>react-app-env.d.ts</code> file in <code>src/</code> and 
                            a <code>tsconfig.json</code> file in <code>root/</code>. 
                            These files are responsible for compiling TS into JavaScript. 
                        </p>
                        <p>
                            I'll note that it's also a good idea to create a <code>declare_modules.d.ts</code> file in 
                            <code> src/</code>. Declare modules in the file when a @type definition for a dependency doesn't 
                            exist. And for this to work, you'll need add a line to <code>tsconfig.json</code>.
                        </p>
                        <p>
                            <code>
                                "typeRoots": ["./src/declare_modules", "node_modules/@types"]
                            </code>
                        </p>
                        <p>
                            Your file(s) sould look like this:
                        </p>
                        <ReactEmbedGist gist='Winggo/0e2ce1b9d9749b2a319620a5d860ba7a' />
                        <ReactEmbedGist gist='Winggo/6bc59c9eb1b03876522ca5ff3659032d' />
                        <p>
                            This ensures the TypeScript compiler access to the @types definitions. And lastly, 
                            an error that kept happening to me when I change file extensions to <code>.tsx</code> is 
                            <code> ENOENT: no such file or directory when importing</code>. This happens because 
                            I essentially deleted the JS file and created a TSX file, so the app can no longer find 
                            the JS file it needed. I fixed this by 
                            revisiting the import lines and restarting the React server. Hope that saves you a bit of headache. 
                        </p>
                        <p>
                            This process took a bit of time setting up, but now I know a whole lot more about type 
                            definitions and maintaing cleaner code. Now when I open up a file and look at a function, I 
                            know exactly what it takes in and puts out. I can find all my answers in my IDE and compiler. 
                            Here's to a more efficient workflow.
                        </p>
                    </div>
                </Fade>

                <Fade>
                    <Footer content='Happy TypeScripting.'/>
                </Fade>
            </div>
        </Container>
    );
}

export default MigrationBlog;