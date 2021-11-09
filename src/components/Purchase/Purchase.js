import React from "react";



function Purchase() {



    return (
        <React.Fragment>
            <h1>Primero dinos tus datos para poder conocerte!</h1>
            <div style={{display: "flex", flexDirection: "column",alignItems:"center"}}>

                <input type="text" />
                <input type="text" />
                <input type="text" />

                <button>Continuar</button>
            </div>
        </React.Fragment>
    )
}
export default Purchase;