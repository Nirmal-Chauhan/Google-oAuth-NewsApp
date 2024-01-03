import Header from "./Header";
import NewsComponent from "./NewsComponent";

function User(props){
    return (
        <>
        <Header data={props}/>
        <NewsComponent/>

        </>
    )
}

export  default User;