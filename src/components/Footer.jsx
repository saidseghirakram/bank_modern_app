import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col `}>
    <div className={`${styles.flexStart} md:flex-row flex-col  mb-8 w-full`}>
      <div className='flex-1 flex flex-col justify-start mr-10 '>
        <img
          src={logo}
          alt='hoobank'
          className='w-[266px] h-[72px] object-contain'
        />
        <p className={`${styles.paragraph} max-w-[310px] mt-4 `}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((link) => (
          <div
            key={link.key}
            className='flex flex-col ss:my-0 my-4  min-w-[150px] '
          >
            <h4 className='text-white text-[18px] mb-4 font-poppins font-medium leading-[27px]'>
              {link.title}
            </h4>
            <ul>
              {link.links.map((item, index) => (
                <li
                  key={item.name}
                  className={`text-dimWhite cursor-pointer leading-[24px]  text-[16px] font-poppins hover:text-secondary ${
                    index === link.links.length - 1 ? 'mb-0' : 'mb-4'
                  }`}
                >
                  <a>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className='flex md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45] justify-between  items-center w-full'>
      <p className='text-white text-[18px] mb-4 font-poppins font-normal text-center leading-[27px]'>
        2021 HooBank. All Rights Reserved.
      </p>
      <div className='flex flex-row md:mt-0 mt-6'>
        {socialMedia.map((item, index) => (
          <img key={item.id} src={item.icon} alt={item.id}
           className={`cursor-pointer w-[21px] h-[21px]  object-contain ${index===socialMedia.length -1 ? 'mr-0' : 'mr-6'}`} />
        ))}
      </div>
    </div>
  </section>
)

export default Footer
