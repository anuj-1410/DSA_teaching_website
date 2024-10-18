import React from 'react';
import ReactPlayer from 'react-player';

const Learning = () => {
    const videoUrl = "https://youtu.be/7m1DMYAbdiY?si=DRQz54_7RiuTf-pT";

    return (
        <div style={{fontSize:"1.3rem", margin:"0 50px"}}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ borderRadius: "25px", overflow: "hidden", width: "800px", 
                    height: "450px", boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
                    <ReactPlayer
                        url={videoUrl}
                        controls
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
           <h2> Highlights</h2><ul>
<li>📚 Introduction to Stacks: Understanding stack data structures and their importance in coding.</li>
<li>🔄 LIFO Concept: Stacks operate on the Last In First Out principle.</li>
<li>⚙️ Core Operations: Key stack operations include push, pop, and peek.</li>
<li>🛠️ Real-Life Examples: Stacks are compared to everyday scenarios like stacking plates.</li>
<li>💻 Implementation Techniques: Discusses implementing stacks using arrays and linked lists.</li>
<li>🚀 Java Collection Framework: Highlights the simplicity of using Java’s built-in stack implementation.</li>
<li>🔗 Problem-Solving: Demonstrates stack-related problems and their solutions using recursion.</li>
</ul>
<h2>Key Insights</h2><ul>
<li>📖 Importance of Stacks in DSA: Stacks are fundamental in data structure learning, crucial for exams and interviews, providing efficient solutions to specific problems.</li>
<li>🏗️ Stack Operations: Mastery of push, pop, and peek operations is essential for efficient stack manipulation and understanding memory management.</li>
<li>🧩 Real-Life Analogies: Relating stacks to everyday tasks (like dishwashing) aids comprehension, reinforcing the concept of LIFO.</li>
<li>💡 Array vs. Linked List Implementation: Each implementation method has advantages; linked lists allow dynamic sizing, while arrays have fixed sizes, impacting performance.</li>
<li>🔄 Recursion and Stacks: Recursion implicitly uses stacks, showcasing their importance in function calls and memory management.</li>
</ul></div>
    );
};

export default Learning;
