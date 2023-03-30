import ReactDOM from 'react-dom/client'
import './styles/global.sass'
import './styles/reset.sass'
import AppRouter from './components/AppRouter'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<AppRouter />
)
