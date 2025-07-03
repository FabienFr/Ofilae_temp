import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4 text-center mb-4">Bootstrap avec Next.js</h1>
          <p className="lead text-center mb-5">
            Configuration réussie de Bootstrap dans votre projet Next.js !
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">Ceci est un exemple de card Bootstrap.</p>
              <button className="btn btn-primary">Bouton Primary</button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">Un autre exemple de card Bootstrap.</p>
              <button className="btn btn-success">Bouton Success</button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card 3</h5>
              <p className="card-text">Et encore un exemple de card.</p>
              <button className="btn btn-warning">Bouton Warning</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <div className="alert alert-info" role="alert">
            <strong>Félicitations !</strong> Bootstrap est maintenant configuré et fonctionnel dans votre projet Next.js.
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Menu déroulant
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action 1</a></li>
              <li><a className="dropdown-item" href="#">Action 2</a></li>
              <li><a className="dropdown-item" href="#">Action 3</a></li>
            </ul>
          </div>
        </div>

        <div className="col-md-6">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Ouvrir Modal
          </button>
        </div>
      </div>

      {/* Modal Bootstrap */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal Bootstrap</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Ceci est un exemple de modal Bootstrap qui fonctionne grâce au JavaScript chargé côté client.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
              <button type="button" className="btn btn-primary">Sauvegarder</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
