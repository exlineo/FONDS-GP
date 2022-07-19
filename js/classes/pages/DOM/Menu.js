import { CustomDOM } from './DOM.js';
import { CustomRouter } from '../utils/Router.js';
import { ServiceStore } from '../../data/Service.js';

/** Gestion du menu, des interactions avec les données et les pages */
export class Menu extends CustomDOM {
    el; // Elément HTML du menu
    liens = []; // Liste des liens du menu
    categorie; // Catégorie de contenus à afficher dan une page
    mobileEl; // Référence HTML du menu mobile
    burger; // Bouton pour ouvrir le menu mobile
    router; // Gestion des routes
    mobile = false;

    constructor() {
        super();
        this.principalEl = document.querySelector('main>header>nav');
        this.piedEl = document.querySelector('main>footer>nav');
        this.burger = document.querySelector('button.burger');
        this.mobileEl = document.querySelector('nav.mobile');
        this.router = new CustomRouter();
        // Menus créés une fois que les données ont été chagée et stockées dans le service
        this.setStructureMenus();
        this.burger.addEventListener('click', (e) => {
            this.toggleMobile();
        })
    };
    /** Ecrire les menus dans le DOM */
    setStructureMenus() {
        this.creeMenu(this.principalEl, this.triMenus(ServiceStore._menus.principal));
        this.creeMenu(this.mobileEl, this.triMenus(ServiceStore._menus.principal));
        this.creeMenu(this.piedEl, ServiceStore._menus.pied);
    };
    /** Animations */
    animationInit() {
        const s = document.querySelectorAll("#contenu > section");
        // s[0].className = 'disparait-gauche';
        // s[1].className = 'disparait-droite';
        s[0].className = '';
        s[1].className = '';
    }
    animationPage() {
        const s = document.querySelectorAll("#contenu > section");
        s[0].className = 'apparait-gauche';
        s[1].className = 'apparait-droite';
    }
}
