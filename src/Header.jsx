const Header = () => {
    return (
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary rounded">
            <div class="container-fluid">
                <h1 class="navbar-brand">Equipos</h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
             <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"     >Inicio</a>
                     </li>
                    </ul>
                 <form class="d-flex" role="search">
                     <input class="form-control me-2" type="search" placeholder="Buscar Integrante" aria-label="Search"/>
                    <button class="btn btn-success bg-dark" type="submit">Buscar</button>
                 </form>
                </div>
            </div>
        </nav>
   </header>
    );
}
export default Header;