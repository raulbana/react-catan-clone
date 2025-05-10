export interface FontProps {
    fontFamily: string;
    fontWeight: number;
    fontSize: string;
    lineHeight: string;
}

interface Typography {
    paragraph: {
        sm1: FontProps;
        sm2: FontProps;
        md1: FontProps;
        md2: FontProps;
        lg1: FontProps;
        lg2: FontProps;
        b1: FontProps;
        b2: FontProps;
        b3: FontProps;
        b4: FontProps;
        sm1v: FontProps;
        sm2v: FontProps;
        md1v: FontProps;
        md2v: FontProps;
        lg1v: FontProps;
        lg2v: FontProps;
        b1v: FontProps;
        b2v: FontProps;
        b3v: FontProps;
        b4v: FontProps;
    };
    title: {
        h1: FontProps;
        h2: FontProps;
        h3: FontProps;
        h4: FontProps;
        h5: FontProps;
        h1v: FontProps;
        h2v: FontProps;
        h3v: FontProps;
        h4v: FontProps;
        h5v: FontProps;
    };
}

export const typography: Typography = {
    paragraph: {
        sm1: { fontFamily: 'Poppins', fontSize: '12px', lineHeight: '16px', fontWeight: 400 },
        sm2: { fontFamily: 'Poppins', fontSize: '14px', lineHeight: '20px', fontWeight: 400 },
        md1: { fontFamily: 'Poppins', fontSize: '16px', lineHeight: '24px', fontWeight: 400 },
        md2: { fontFamily: 'Poppins', fontSize: '18px', lineHeight: '28px', fontWeight: 400 },
        lg1: { fontFamily: 'Poppins', fontSize: '20px', lineHeight: '32px', fontWeight: 400 },
        lg2: { fontFamily: 'Poppins', fontSize: '24px', lineHeight: '36px', fontWeight: 400 },
        b1: { fontFamily: 'Poppins', fontSize: '16px', lineHeight: '24px', fontWeight: 700 },
        b2: { fontFamily: 'Poppins', fontSize: '18px', lineHeight: '28px', fontWeight: 700 },
        b3: { fontFamily: 'Poppins', fontSize: '20px', lineHeight: '32px', fontWeight: 700 },
        b4: { fontFamily: 'Poppins', fontSize: '24px', lineHeight: '36px', fontWeight: 700 },
        sm1v: { fontFamily: 'Montserrat', fontSize: '12px', lineHeight: '16px', fontWeight: 400 },
        sm2v: { fontFamily: 'Montserrat', fontSize: '14px', lineHeight: '20px', fontWeight: 400 },
        md1v: { fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '24px', fontWeight: 400 },
        md2v: { fontFamily: 'Montserrat', fontSize: '18px', lineHeight: '28px', fontWeight: 400 },
        lg1v: { fontFamily: 'Montserrat', fontSize: '20px', lineHeight: '32px', fontWeight: 400 },
        lg2v: { fontFamily: 'Montserrat', fontSize: '24px', lineHeight: '36px', fontWeight: 400 },
        b1v: { fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '24px', fontWeight: 700 },
        b2v: { fontFamily: 'Montserrat', fontSize: '18px', lineHeight: '28px', fontWeight: 700 },
        b3v: { fontFamily: 'Montserrat', fontSize: '20px', lineHeight: '32px', fontWeight: 700 },
        b4v: { fontFamily: 'Montserrat', fontSize: '24px', lineHeight: '36px', fontWeight: 700 },

    },
    title: {
        h1: { fontFamily: 'Poppins', fontSize: '32px', lineHeight: '40px', fontWeight: 400 },
        h2: { fontFamily: 'Poppins', fontSize: '28px', lineHeight: '36px', fontWeight: 400 },
        h3: { fontFamily: 'Poppins', fontSize: '24px', lineHeight: '32px', fontWeight: 400 },
        h4: { fontFamily: 'Poppins', fontSize: '20px', lineHeight: '28px', fontWeight: 400 },
        h5: { fontFamily: 'Poppins', fontSize: '16px', lineHeight: '24px', fontWeight: 400 },
        h1v: { fontFamily: 'Montserrat', fontSize: '32px', lineHeight: '40px', fontWeight: 400 },
        h2v: { fontFamily: 'Montserrat', fontSize: '28px', lineHeight: '36px', fontWeight: 400 },
        h3v: { fontFamily: 'Montserrat', fontSize: '24px', lineHeight: '32px', fontWeight: 400 },
        h4v: { fontFamily: 'Montserrat', fontSize: '20px', lineHeight: '28px', fontWeight: 400 },
        h5v: { fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '24px', fontWeight: 400 },
    }
};

export const colors = {
    primary: '#007bff',   
    secondary: '#6c757d', 
    success: '#28a745',   
    danger: '#dc3545',    
    warning: '#ffc107',   
    info: '#17a2b8',      

    wood: '#8B4513',      
    clay: '#D2691E',      
    stone: '#A9A9A9',     
    sheep: '#7CFC00',     
    wheat: '#FFD700',     
    desert: '#E0C097',    

    dark: '#343a40',      
    light: '#f8f9fa',     
    muted: '#6c757d',     
    white: '#ffffff',     
    black: '#000000',     
    purple: '#6f42c1',    
    pink: '#e83e8c',      
    teal: '#20c997',      
    orange: '#fd7e14',    
};

export const theme = {
    typography,
    colors,
};
