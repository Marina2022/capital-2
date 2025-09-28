'use client'

import Cleave from 'cleave.js/react'

import s from './Contacts.module.scss';
import {Controller, useForm} from 'react-hook-form';
import {useState} from "react";
import SuccessModal from "@/components/contacts-page/SuccessModal/SuccessModal";


const Contacts = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [key, setKey] = useState(0);
  const [focused, setFocused] = useState(false)

  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
    reset,
    control,
    watch
  } = useForm();

  const phoneValue = watch('phone')

  // const onSubmit = (data) => {

  const onSubmit = async (data) => {
    try {
      const formData = {
        access_key: '1c8826f7-3cc2-4cfa-b9e3-f7b0658656a3',
        name: data.name,
        email: data.email,
        phone: '+' + data.phone,
        company: data.company,
        message: data.message,
        redirect: 'https://web3forms.com/success'
      }

      console.log('я живой')
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const json = await res.json();
      if (json.success) {
        setIsOpen(true)
        reset({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
        setKey(prev => prev + 1);
      } else {
        console.error('Ошибка отправки:', json);
      }
    } catch (err) {
      console.error('Ошибка:', err);
    }
  }


  return (
    <>
      <section className={s.contacts}>
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className={s.topWrapper}>
              <div className={s.getInTouch}>
                <h1 className={s.mainTitle}>Get in touch</h1>
                <p>Viverra euismod sed ultrices dictum urna nunc aliquam gravida phasellus vivamus commodo odio viverra
                  nisl egestas donec sit mi.</p>
                <h2 className={s.subtitle}>Contact details</h2>
                <div className={s.listItem}>
                  <div className={s.circle}></div>
                  <span>losangeles@capital.com</span>
                </div>
                <div className={s.listItem}>
                  <div className={s.circle}></div>
                  <span>(310) 645-8321</span>
                </div>
              </div>
              <div className={s.formContentWrapper}>
                <div className={s.formContent}>
                  <div className={s.inputs}>

                    <div className={s.inputWrapper}>
                      <input
                        {...register('name', {required: 'Enter your name'})}
                        placeholder="Full Name"
                        className={s.input}
                      />
                      {errors.name && (
                        <p className={s.error}>{errors.name.message}</p>
                      )}
                    </div>

                    <div className={s.inputWrapper}>
                      <input
                        {...register('email', {
                          required: 'Enter your email',
                          pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: 'Enter a valid email address'
                          }
                        })}
                        placeholder="Enter your email"
                        className={s.input}
                      />
                      {errors.email && (
                        <p className={s.error}>{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className={s.inputs}>

                    <div className={s.inputWrapper}>

                      {phoneValue && phoneValue.length > 0 && (
                        <div style={{
                          position: 'absolute',
                          left: '-10px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          color: '#888'
                        }}>+</div>
                      )}

                      <Controller
                        name="phone"
                        control={control}
                        rules={{required: 'Enter your phone number'}}
                        render={({field}) => (

                          <Cleave
                            key={key}
                            {...field}
                            placeholder="Enter your phone"
                            className={s.phoneInput}
                            options={{
                              blocks: [1, 3, 3, 4],       // 1 цифра, затем 3-3-4
                              delimiters: [' ', ' ', ' '],
                              numericOnly: true,
                              // prefix: '+'

                            }}
                            onChange={(e) => field.onChange(e.target.value)}
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                          />

                        )}
                      />


                      {errors.phone && (
                        <p className={s.error}>{errors.phone.message}</p>
                      )}
                    </div>


                    <div className={s.inputWrapper}>
                      <input
                        {...register('company', {})}
                        placeholder="Company"
                        className={s.input}
                      />
                    </div>
                  </div>

                  <textarea
                    {...register('message', {required: 'Enter your message'})}
                    placeholder="Type your message here..."
                    className={s.message}
                  />
                  {errors.message && (
                    <p className={s.error}>{errors.message.message}</p>
                  )}
                </div>
              </div>
            </div>
            <div className={s.bottomWrapper}>
              <div className={s.social}>
                <h2 className={s.followUs}>Follow us</h2>
                <div className={s.icons}>
                  <a href="#">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="path-1-inside-1_12671_5132" fill="white">
                        <path
                          d="M11.7124 8.78926L18.4133 1H16.8254L11.0071 7.7633L6.35992 1H1L8.02738 11.2273L1 19.3955H2.58799L8.73237 12.2533L13.6401 19.3955H19L11.7121 8.78926H11.7124ZM9.53747 11.3174L8.82546 10.299L3.16017 2.19542H5.59922L10.1712 8.73527L10.8832 9.75368L16.8262 18.2545H14.3871L9.53747 11.3178V11.3174Z"/>
                      </mask>
                      <path
                        d="M11.7124 8.78926L18.4133 1H16.8254L11.0071 7.7633L6.35992 1H1L8.02738 11.2273L1 19.3955H2.58799L8.73237 12.2533L13.6401 19.3955H19L11.7121 8.78926H11.7124ZM9.53747 11.3174L8.82546 10.299L3.16017 2.19542H5.59922L10.1712 8.73527L10.8832 9.75368L16.8262 18.2545H14.3871L9.53747 11.3178V11.3174Z"
                        fill="#090909"/>
                      <path
                        d="M11.7124 8.78926V47.7893H29.6073L41.2776 34.2235L11.7124 8.78926ZM18.4133 1L47.9786 26.4342L103.41 -38H18.4133V1ZM16.8254 1V-38H-1.06925L-12.7396 -24.4344L16.8254 1ZM11.0071 7.7633L-21.1364 29.8494L7.54381 71.5898L40.5721 33.1977L11.0071 7.7633ZM6.35992 1L38.5034 -21.0861L26.8817 -38H6.35992V1ZM1 1V-38H-73.1169L-31.1434 23.0863L1 1ZM8.02738 11.2273L37.5918 36.6625L57.1795 13.8948L40.1707 -10.859L8.02738 11.2273ZM1 19.3955L-28.5644 -6.03959L-83.9999 58.3955H1V19.3955ZM2.58799 19.3955V58.3955H20.4828L32.1531 44.8299L2.58799 19.3955ZM8.73237 12.2533L40.8755 -9.8334L12.1949 -51.5727L-20.8327 -13.1811L8.73237 12.2533ZM13.6401 19.3955L-18.503 41.4822L-6.88127 58.3955H13.6401V19.3955ZM19 19.3955V58.3955H93.1178L51.1431 -2.69109L19 19.3955ZM11.7121 8.78926V-30.2107H-62.4058L-20.4311 30.8759L11.7121 8.78926ZM9.53747 11.3174H48.5375V-0.963988L41.5003 -11.0293L9.53747 11.3174ZM8.82546 10.299L-23.138 32.6449L-23.1374 32.6458L8.82546 10.299ZM3.16017 2.19542V-36.8046H-71.6907L-28.8033 24.5413L3.16017 2.19542ZM5.59922 2.19542L37.5629 -20.1501L25.9199 -36.8046H5.59922V2.19542ZM10.1712 8.73527L-21.7925 31.0808L-21.7916 31.0821L10.1712 8.73527ZM10.8832 9.75368L42.8466 -12.5922L42.846 -12.5931L10.8832 9.75368ZM16.8262 18.2545V57.2545H91.6771L48.7896 -4.09142L16.8262 18.2545ZM14.3871 18.2545L-17.5759 40.6009L-5.93287 57.2545H14.3871V18.2545ZM9.53747 11.3178H-29.4625V23.599L-22.4256 33.6642L9.53747 11.3178ZM11.7124 8.78926L41.2776 34.2235L47.9786 26.4342L18.4133 1L-11.1519 -24.4342L-17.8528 -16.6449L11.7124 8.78926ZM18.4133 1V-38H16.8254V1V40H18.4133V1ZM16.8254 1L-12.7396 -24.4344L-18.5579 -17.6711L11.0071 7.7633L40.5721 33.1977L46.3905 26.4344L16.8254 1ZM11.0071 7.7633L43.1505 -14.3228L38.5034 -21.0861L6.35992 1L-25.7836 23.0861L-21.1364 29.8494L11.0071 7.7633ZM6.35992 1V-38H1V1V40H6.35992V1ZM1 1L-31.1434 23.0863L-24.116 33.3136L8.02738 11.2273L40.1707 -10.859L33.1434 -21.0863L1 1ZM8.02738 11.2273L-21.537 -14.2078L-28.5644 -6.03959L1 19.3955L30.5644 44.8307L37.5918 36.6625L8.02738 11.2273ZM1 19.3955V58.3955H2.58799V19.3955V-19.6045H1V19.3955ZM2.58799 19.3955L32.1531 44.8299L38.2975 37.6876L8.73237 12.2533L-20.8327 -13.1811L-26.9771 -6.03878L2.58799 19.3955ZM8.73237 12.2533L-23.4107 34.3399L-18.503 41.4822L13.6401 19.3955L45.7832 -2.69112L40.8755 -9.8334L8.73237 12.2533ZM13.6401 19.3955V58.3955H19V19.3955V-19.6045H13.6401V19.3955ZM19 19.3955L51.1431 -2.69109L43.8552 -13.2974L11.7121 8.78926L-20.4311 30.8759L-13.1431 41.4822L19 19.3955ZM11.7121 8.78926V47.7893H11.7124V8.78926V-30.2107H11.7121V8.78926ZM9.53747 11.3174L41.5003 -11.0293L40.7883 -12.0477L8.82546 10.299L-23.1374 32.6458L-22.4254 33.6642L9.53747 11.3174ZM8.82546 10.299L40.7889 -12.0469L35.1236 -20.1505L3.16017 2.19542L-28.8033 24.5413L-23.138 32.6449L8.82546 10.299ZM3.16017 2.19542V41.1954H5.59922V2.19542V-36.8046H3.16017V2.19542ZM5.59922 2.19542L-26.3645 24.5409L-21.7925 31.0808L10.1712 8.73527L42.1349 -13.6102L37.5629 -20.1501L5.59922 2.19542ZM10.1712 8.73527L-21.7916 31.0821L-21.0796 32.1005L10.8832 9.75368L42.846 -12.5931L42.134 -13.6115L10.1712 8.73527ZM10.8832 9.75368L-21.0802 32.0996L-15.1372 40.6004L16.8262 18.2545L48.7896 -4.09142L42.8466 -12.5922L10.8832 9.75368ZM16.8262 18.2545V-20.7455H14.3871V18.2545V57.2545H16.8262V18.2545ZM14.3871 18.2545L46.3502 -4.09192L41.5005 -11.0286L9.53747 11.3178L-22.4256 33.6642L-17.5759 40.6009L14.3871 18.2545ZM9.53747 11.3178H48.5375V11.3174H9.53747H-29.4625V11.3178H9.53747Z"
                        fill="black" mask="url(#path-1-inside-1_12671_5132)"/>
                    </svg>
                  </a>
                  <a href="#">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1 2.99134C1 2.41413 1.20271 1.93794 1.60811 1.56277C2.01351 1.18758 2.54055 1 3.18919 1C3.82626 1 4.34169 1.18469 4.73552 1.55411C5.14092 1.93506 5.34363 2.43145 5.34363 3.04329C5.34363 3.5974 5.14672 4.05915 4.7529 4.42857C4.3475 4.80952 3.81467 5 3.15444 5H3.13707C2.49999 5 1.98456 4.80952 1.59073 4.42857C1.19691 4.04762 1 3.56854 1 2.99134ZM1.22587 18.1429V6.57576H5.08301V18.1429H1.22587ZM7.22008 18.1429H11.0772V11.684C11.0772 11.2799 11.1236 10.9682 11.2162 10.7489C11.3784 10.3564 11.6245 10.0245 11.9546 9.75324C12.2847 9.48195 12.6988 9.34632 13.1969 9.34632C14.4942 9.34632 15.1429 10.2179 15.1429 11.961V18.1429H19V11.5108C19 9.8023 18.5946 8.50649 17.7838 7.62337C16.973 6.74026 15.9015 6.2987 14.5695 6.2987C13.0753 6.2987 11.9112 6.93939 11.0772 8.22078V8.25541H11.0598L11.0772 8.22078V6.57576H7.22008C7.24324 6.94516 7.25483 8.09378 7.25483 10.0216C7.25483 11.9495 7.24324 14.6565 7.22008 18.1429Z"
                        fill="#090909"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className={s.send}>
                <button className={s.sendBtn}>
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <SuccessModal open={isOpen} onClose={() => setIsOpen(false)}>
        <p>🎉</p>
        <p>Your message has been successfully sent!</p>
      </SuccessModal>
    </>

  );
};

export default Contacts;