import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux";
import {appStore} from "./appStore.ts";
import {RouterProvider} from "react-router-dom";
import {appRouter} from "./appRouter.tsx";
import {ModalProvider} from "./providers/ModalProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ModalProvider>
            <Provider store={appStore}>
                <RouterProvider router={appRouter} />
            </Provider>
        </ModalProvider>
    </StrictMode>,
)
