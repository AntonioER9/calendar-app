import { useDispatch, useSelector } from "react-redux"
import { onCloseDateModal, onOpenDateModal } from "../store";

// useSelector sirve para tener acceso al state global de la app
export const useUiStore = () => { // hook para utilizar los reducers provenientes de uiSlice

    const dispatch = useDispatch();

    const {
        isDateModalOpen
    } = useSelector( state => state.ui);

    const openDateModal = () => { //Función para abrir el modal
        dispatch(onOpenDateModal());
    }

    const closeDateModal = () => { //Función para cerrar el modal
        dispatch(onCloseDateModal());
    }

    const toggleDateModal = () => { //Función togle abrir y cerrar el modal
        (isDateModalOpen)
            ? openDateModal()
            : closeDateModal();
    }


    return {
        //* Properties
        isDateModalOpen,

        //* Methods
        closeDateModal,
        openDateModal,
        toggleDateModal,
    }
}