export interface ErrorState {
    errors_pendientes_de_notificar: Array<String>,
    errors_notificados: Array<String>,
}

export const initialErrorState: ErrorState = {
    errors_pendientes_de_notificar: [],
    errors_notificados: [],
}
