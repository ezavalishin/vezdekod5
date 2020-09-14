import React, {ChangeEvent, FC, InputHTMLAttributes, useEffect, useState} from 'react';
import {classNames, getClassName, Tappable, usePlatform} from '@vkontakte/vkui';
import {HasRef, HasRootRef} from '@vkontakte/vkui/src/types';
import './ImageInput.css';
import {Icon24DismissOverlay, Icon28PictureOutline} from '@vkontakte/icons';
import {HasFormStatus} from '@vkontakte/vkui/dist/types';


export interface ImageInputProps extends InputHTMLAttributes<HTMLInputElement>,
  HasRef<HTMLInputElement>,
  HasRootRef<HTMLDivElement>,
  HasFormStatus {
  defaultImage?: File
}

const ImageInput: FC<ImageInputProps> = (props: ImageInputProps) => {

  const [resultImage, setResultImage] = useState(null);

  const {children, className, style, getRef, getRootRef, status, ...restProps} = props;
  const platform = usePlatform();

  const loadImage = (file: File) => {
    return new Promise(((resolve, reject) => {
      const image = new FileReader();

      image.onload = () => {
        resolve(image.result);
      };

      image.onerror = () => {
        reject();
      };

      image.readAsDataURL(file);
    }));
  };

  useEffect(() => {
    if (props.defaultImage) {
      loadImage(props.defaultImage)
        .then((result) => {
          setResultImage(result);
        });
    }
  }, []);

  const handleChange = async (e:ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];

    if (file) {
      setResultImage(await loadImage(file));
    }
  };

  const handleRemove = () => {
    setResultImage(null);
  };

  return (
    <div ref={getRootRef}
      className={classNames(getClassName('ImageInput', platform), getClassName('ImageInput', platform), {
        [`ImageInput--s-${status}`]: status !== 'default',
        ['ImageInput--s-filled']: !!resultImage
      }, className)} style={style}>
      <div className="ImageInput__wrapper" style={{backgroundImage: `url(${resultImage})`}}>
        {resultImage &&
          (
            <Tappable className="ImageInput__dismiss" onClick={handleRemove}>
              <Icon24DismissOverlay />
            </Tappable>
          )}

        <label className="ImageInput__label">
          <div className="ImageInput__before">
            <Icon28PictureOutline/>
          </div>
          <div className="ImageInput__caption">
            {children}
          </div>
          <input type="file" ref={getRef} {...restProps} className="ImageInput__input" onChange={handleChange}/>
        </label>

      </div>
    </div>
  );
};

ImageInput.defaultProps = {
  children: 'Загрузите обложку',
};

export default ImageInput;
