<template>
  <Layout class="ivu-layout-has-sider j_cert_detail">
    <Layout class="j_layout_content j_form_detail">
      <JHeader :title="'荣誉证书'"/>
      <Content>
        <Form :model="detail" :rules="rules" :label-width="110" ref="modalForm">
          <FormItem label="证书名称：" prop="name">
            <Input v-model="detail.name" placeholder="请输入证书名称"></Input>
          </FormItem>
          <FormItem label="证书图片：" prop="att.serverPath">
            <JPictrue :src.sync="detail.att.serverPath" @on-change="change"/>
          </FormItem>
        </Form>
        <Button type="primary" size="small" @click="submit('modalForm')" style="margin-left:110px;margin-top:20px;">保存</Button>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import qs from 'qs'
import JHeader from '@/components/group/j-header'
import JPictrue from '@/components/group/j-pictrue'
export default {
  components: {
    JHeader,
    JPictrue
  },
  data () {
    return {
      detail: {
        att: {
          serverPath: ''
        },
        type: '01'
      },
      rules: {
        name: [
          { required: true, message: '证书名称不能为空', trigger: 'blur' }
        ],
        'att.serverPath': [
          { required: true, message: '证书图片不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.get()
  },
  methods: {
    get () {
      if (this.$route.params.id === 'add') {
        this.detail = {
          att: {
            serverPath: ''
          },
          type: '01'
        }
      } else {
        this.$http.get('/rest/api/cert/detail/' + this.$route.params.id).then((res) => {
          if (res.success) {
            this.detail = res.attributes.data
            if (!this.detail.att) this.detail.att = {serverPath: ''}
          } else {
            this.$Message.error(res.msg)
          }
        })
      }
    },
    // 功能
    change (e) {
      this.detail.att.serverPath = e.src
      this.detail.attachmentId = e.id
    },
    // 提交
    submit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          let data = {
            model: JSON.stringify(this.detail)
          }
          let url = ''
          if (this.detail.certificateId) {
            url = '/' + this.detail.certificateId
            data._method = 'put'
          }
          this.$http.post('/rest/api/cert/detail' + url, qs.stringify(data)).then((res) => {
            if (res.success) {
              this.$Message.success('保存成功')
              this.$emit('on-change')
            } else {
              this.$Message.error(res.msg)
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="less">
</style>
