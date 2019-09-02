import React from 'react';
import classes from "Content.module.css"

function Content() {
    return (
        <div className={classes.Content}>
            <div>
                Image
            </div>
            <div>
                Text
            </div>
            <div>
                Audio
            </div>
        </div>
    );
}

export default Content;