import { useQuery } from "@tanstack/react-query";

function User(props) {

  const userID = props.user;

  const { isPending, error, data } = useQuery({
      queryKey: ['user', userID],
      queryFn: () =>
        fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
        .then((res) => res.json(),),
    })
  
    if (isPending) return 'Loading...'
  
    if (error) return 'An error has occurred: ' + error.message
  
    return (
      <div className="flex-1 text-gray-700 text-xs p-2 rounded flex-col items-center" key={userID}>
          <p>Author: {data.name}</p>
          <p>E-mail: {data.email}</p>
      </div>
    )
}


export default User;