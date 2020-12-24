1. npx create-react-app my-app

2. npm cache clean --force

1) 생성 

function 컴포넌트로 만들거나,

function Welcome(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>  
    </div>
  )
}

class 컴포넌트로 만들거나,

class WelcomeClass extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

2) if 문

function Welcome(props) {
  return (
    <div>
       {props.indexItem === 2 ?  <Welcome name="리액트"></Welcome> :  <Welcome name="리액트3"></Welcome>}
      <h1>Hello, {props.name}</h1>  
    </div>
  )
}


3) 만들었으면 써야지. 커스텀 element 사용하기. props

 <WelcomeClass name="리액트 클래스"></WelcomeClass>

사용한거임.

애초 생성할때, props.name 처럼 변수로 들어갈 부분정해놓고, 커스텀 쓰면서 값을 전달하면 됨.



4) props 응용(??)

const comment = {
  indexItem : 1,
  date : new Date(),
  text : 'I hope you enjoy learning React!',
  author : {
    name : 'Hello Kitty',
    avatarUrl : 'https://placekitten.com/g/64/64'
  }
}

변수로 값을 저장해놓고. (추후, axios 등 json 을 받기도 함)

 <Comment indexItem={comment.indexItem} author={comment.author} date={comment.date} text={comment.text}></Comment>

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

즉, 변수로 받고 싶은 부분들 정해서 생성함수 만들어서 생성해주고. 혹은 젤처음 그냥 코딩해도 될듯. 모양잡고. 이후 변수화.
변수에 넣어줄 객체 (json등) 만들고.
커스텀 elemetn 로 사용해주기.


5) 재사용가능하게 부분요소로 만들어두기. (잘게 자르기)
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avartar" src={props.author.avatarUrl} alt={props.author.name} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}


=>

function Comment(props) {
  return (
    <div className="Comment">
       <UserInfo author={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}


function UserInfo(props) {
 return (
     <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
)
}

function Avartar(props) {
  return (
    <img className="Avartar" src={props.author.avatarUrl} alt={props.author.name} />
  )
}

<Comment indexItem={comment.indexItem} author={comment.author} date={comment.date} text={comment.text}></Comment>
