import { View, Text } from '@tarojs/components'
import type { ModalProps } from '../../../types/modal'
import { useMask } from '../../utils'

export default function Index(props: ModalProps) {
  const {
    title,
    content,
    onConfirm,
    onCancel,
    confirmText,
    cancelText,
    cref,
    className,
    ...others
  } = props
  const { maskRef } = useMask(cref)

  return (
    <View className="weui-mask" style={{ display: 'none' }} ref={maskRef}>
      <View className={`weui-dialog ${className || ''}`} {...others}>
        <View className="weui-dialog__hd">
          <Text className="weui-dialog__title">{title}</Text>
        </View>
        <View className="weui-dialog__bd">{content}</View>
        <View className="weui-dialog__ft">
          {onCancel && cancelText && (
            <View
              className="weui-dialog__btn weui-dialog__btn_default"
              onClick={() => {
                cref.current!.hide()
                onCancel()
              }}
            >
              {cancelText}
            </View>
          )}
          <View
            className="weui-dialog__btn weui-dialog__btn_primary"
            onClick={() => {
              cref.current!.hide()
              onConfirm()
            }}
          >
            {confirmText}
          </View>
        </View>
      </View>
    </View>
  )
}
