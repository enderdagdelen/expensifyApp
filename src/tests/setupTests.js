        import Enzyme from 'enzyme';
        import Adapter from 'enzyme-adapter-react-16';

        Enzyme.configure({ adapter: new Adapter() });

//Bu kod ise biz ne zaman enzyme kullansak, kodun react v16 için desteklenmesini sağlayacak.