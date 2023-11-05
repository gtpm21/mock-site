
function Header(props) {

    const handleInputChange = (e) => { 
        const searchTerm = e.target.value;
        props.onSearch(searchTerm)
    }

    return(
        <div className="flex items-center justify-between px-10">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    {props.name}
            </h1>
            <div className="relative flex items-center">
                <input
                type="text"
                value={props.searchItem}
                onChange={handleInputChange}
                placeholder='Type to search'
                className="p-2 pl-10 rounded-full shadow-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 "/>
                <i className="text-gray-400 text-lg fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2"></i>
            </div>
        </div>
    )
}

export default Header;

