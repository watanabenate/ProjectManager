import ProjectMenu from './ProjectMenu'

const Header = () => {
    return (
        // TODO: add hamburger menu, update font
        <div>
            <div className="rectangle">
                <h1 className="header">
                    Hello, Person!
                </h1>

                <ProjectMenu />
            </div>

        </div>
    )
}

export default Header
