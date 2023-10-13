import ThemeSwitch from './theme/ThemeSwitch';

function Header() {
   return (
      <header className='bg-White dark:bg-DarkBlue text-DarkBg dark:text-White transition-colors duration-300'>
         <div className='max-w-[87.5rem] mx-auto py-6 px-8 md:px-14 flex justify-between'>
            <h1 className='font-bold text-lg md:text-xl'>Where in the world?</h1>
            <ThemeSwitch />
         </div>
      </header>
   );
}

export default Header;
