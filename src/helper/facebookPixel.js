import ReactPixel from 'react-facebook-pixel';

export const initFacebookPixel = (pixelId) => {
    ReactPixel.init(pixelId);
    ReactPixel.pageView(); // Opcional: registra visualizações de página automaticamente
};

export const ledFacebookPixel = (pixelId) => {
    ReactPixel.init(pixelId);
    ReactPixel.track('Lead', {
        content_name: 'Formulário de Contato Enviado',
    });
};