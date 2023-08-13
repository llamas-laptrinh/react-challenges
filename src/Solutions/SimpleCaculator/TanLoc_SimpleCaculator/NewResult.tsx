import React, { useState } from "react";

export default function NewResult({newResult} : any) {
    return (
        <div>
            <form>
                <input type="text" value={newResult} />
            </form>
        </div>
    );
};