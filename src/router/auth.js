export default function auth({ next, router }) {
    if (!localStorage.getItem('token')) {
      return router.push({ name: 'home' });
    }
  
    return next();
}