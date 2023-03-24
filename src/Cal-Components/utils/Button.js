

const ButtonComp = (props) => {

    const { value , calFun} = props;

   


    return (

        <div >

            <button onClick={calFun}>{value} </button>

        </div>

    )
};
export default ButtonComp;