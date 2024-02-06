import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";
import { calendarApi } from "../api";


export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const {events, activeEvent} = useSelector(state => state.calendar);
    const {user} = useSelector(state => state.auth);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    const startSavingEvent = async (calendarEvent) => {
        //TODO: Update Event
        if(calendarEvent._id){
            dispatch(onUpdateEvent({...calendarEvent}))
        } else {

            const {data} = await calendarApi.post('/events', calendarEvent);            
            dispatch(onAddNewEvent({...calendarEvent, id: data.event.id, user}))
        }
    }
    
    const startDeletingEvent = () => {
        //TODO: llegar al backend
        dispatch(onDeleteEvent());
    }

    return {
        //* Properties
        activeEvent,
        events,
        hasEventSelected: !!activeEvent, // si activeEvent es null return false, caso contrario return true
       
        //* Methods
        startDeletingEvent,
        setActiveEvent,
        startSavingEvent
    }
}
